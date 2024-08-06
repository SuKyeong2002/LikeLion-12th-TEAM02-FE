import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/auth/Login";
import KakaoLogin from "./pages/auth/KakaoLogin";
import GoogleLogin from "./pages/auth/GoogleLogin";
import Signup from "./pages/auth/Signup";
import { Main } from "./pages/Main";
import Flooring from "./pages/objects/Flooring";
import Furniture from "./pages/objects/Furniture";
import Gift from "./pages/objects/Gift";
import LeftAccessory from "./pages/objects/LeftAccessory";
import LeftWall from "./pages/objects/LeftWall";
import RightAccessory from "./pages/objects/RightAccessory";
import RightWall from "./pages/objects/RightWall";
import Rug from "./pages/objects/Rug";
import SideTable from "./pages/objects/SideTable";
import Sofa from "./pages/objects/Sofa";
import Toy from "./pages/objects/Toy";
import Wallpaper from "./pages/objects/Wallpaper";
import Object from "./pages/Object";
import Shop from "./pages/shop/Shop";
import Payment from "./pages/shop/Payment";
import Chat from "./pages/chat/Chat";
import Friends from "./pages/friends/Friends";
import Settings from "./pages/settings/Settings";
import EditSettings from "./pages/settings/EditSettings";
import InformationSettings from "./pages/settings/InformationSettings";
import WithdrawalSettings from "./pages/settings/WithdrawalSettings";
import Tracker from "./pages/tracker/Tracker";
import Charge from "./pages/shop/Charge";
import PaymentResult from "./pages/shop/PaymentResult";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import { AuthContext } from "./pages/auth/AuthContext";

function App() {
  const { accessToken } = useContext(AuthContext);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/callback/kakao" element={<KakaoLogin />} />
        <Route path="/auth/callback/google" element={<GoogleLogin />} />
        <Route path="/auth/signUp" element={<Signup />} />
        <Route
          path="/"
          element={
            accessToken ? <Main /> : <Navigate to="/auth/login" replace />
          }
        />
        <Route
          path="/leftWall"
          element={
            <ProtectedRoute>
              <LeftWall />
            </ProtectedRoute>
          }
        />
        <Route
          path="/furniture"
          element={
            <ProtectedRoute>
              <Furniture />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sofa"
          element={
            <ProtectedRoute>
              <Sofa />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rightWall"
          element={
            <ProtectedRoute>
              <RightWall />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leftAccessory"
          element={
            <ProtectedRoute>
              <LeftAccessory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sideTable"
          element={
            <ProtectedRoute>
              <SideTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/toy"
          element={
            <ProtectedRoute>
              <Toy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rightAccessory"
          element={
            <ProtectedRoute>
              <RightAccessory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallpaper"
          element={
            <ProtectedRoute>
              <Wallpaper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/flooring"
          element={
            <ProtectedRoute>
              <Flooring />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rug"
          element={
            <ProtectedRoute>
              <Rug />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gift"
          element={
            <ProtectedRoute>
              <Gift />
            </ProtectedRoute>
          }
        />
        <Route
          path="/object"
          element={
            <ProtectedRoute>
              <Object />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-result"
          element={
            <ProtectedRoute>
              <PaymentResult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/charge"
          element={
            <ProtectedRoute>
              <Charge />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <ProtectedRoute>
              <Friends />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-setting"
          element={
            <ProtectedRoute>
              <EditSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/information-setting"
          element={
            <ProtectedRoute>
              <InformationSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/withdrawal-setting"
          element={
            <ProtectedRoute>
              <WithdrawalSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tracker"
          element={
            <ProtectedRoute>
              <Tracker />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
