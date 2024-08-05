// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Chat from "./pages/chat/Chat";
import Friends from "./pages/friends/Friends";
import Settings from "./pages/settings/Settings";
import EditSettings from "./pages/settings/EditSettings";
import InformationSettings from "./pages/settings/InformationSettings";
import WithdrawalSettings from "./pages/settings/WithdrawalSettings";
import Tracker from "./pages/tracker/Tracker";
import CreateDiary from "./pages/tracker/CreateDiary";
import DiaryDetail from "./pages/tracker/DiaryDetail";
import EditDiary from "./pages/tracker/EditDiary";
import RecommendHospital from "./pages/tracker/RecommendHospital";
import RequestList from "./pages/friends/RequestList";
import Loading from "./components/common/Loading";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/callback/kakao" element={<KakaoLogin />} />
        <Route path="/auth/callback/google" element={<GoogleLogin />} />
        <Route path="/auth/signUp" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/leftWall" element={<LeftWall />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/rightWall" element={<RightWall />} />
        <Route path="/leftAccessory" element={<LeftAccessory />} />
        <Route path="/sideTable" element={<SideTable />} />
        <Route path="/toy" element={<Toy />} />
        <Route path="/rightAccessory" element={<RightAccessory />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/rug" element={<Rug />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/object" element={<Object />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friends/request" element={<RequestList />} />
        <Route path="/edit-setting" element={<EditSettings />} />
        <Route path="/information-setting" element={<InformationSettings />} />
        <Route path="/withdrawal-setting" element={<WithdrawalSettings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/diary/new" element={<CreateDiary />} />
        <Route path="/diary/:id" element={<DiaryDetail />} />
        <Route path="/diary/edit/:id" element={<EditDiary />} />
        <Route path="/hospital" element={<RecommendHospital />} />
      </Routes>
    </Router>
  );
}

export default App;
