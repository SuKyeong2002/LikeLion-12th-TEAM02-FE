import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      axios
        .get(`https://moodfriend.site/api/v1/auth/callback/kakao?code=${code}`)
        .then((response) => {
          const { accessToken, refreshToken } = response.data.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          alert("로그인 되었습니다.");
          console.log("카카오 로그인 성공! 메인 화면으로 이동합니다."); // 디버깅 로그
          navigate("/"); // 메인 화면으로 전환
        })
        .catch((error) => {
          console.error("카카오 로그인 실패:", error);
          alert("로그인 중 오류가 발생했습니다.");
        });
    }
  }, [navigate, code]);

  return (
    <div className="LoginHandler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default KakaoLogin;
