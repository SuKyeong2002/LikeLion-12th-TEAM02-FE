import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./pages/auth/AuthContext";

const clientId = process.env.REACT_APP_G_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  </GoogleOAuthProvider>
);
