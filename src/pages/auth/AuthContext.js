import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!accessToken) {
        navigate("/auth/login");
      }
    }, 60000); // 60초마다 확인

    return () => clearInterval(interval);
  }, [accessToken, navigate]);

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/auth/login");
  };

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          try {
            const response = await axios.post(
              "https://moodfriend.site/api/v1/auth/refresh",
              { refreshToken }
            );
            const newAccessToken = response.data.data.accessToken;
            localStorage.setItem("accessToken", newAccessToken);
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(error.config);
          } catch (err) {
            logout();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshToken, logout]);

  const login = (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
