import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import WelcomePage from "../pages/Welcome";
import { PasswordPage } from "../pages/Password";
import { SignupPage } from "../pages/Signup";
import { HomePage } from "../pages/Home";
import { ProfilePage } from "../pages/Profile";
import { RoomPage } from "../pages/Room";
import { SettingsPage } from "../pages/Settings";
import { MyRoomsPage } from "../pages/MyRooms";
//<Route path="stack" element={<TecPage />}></Route>

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="password" element={<PasswordPage />}></Route>
        <Route path="room/:id" element={<RoomPage />}></Route>
        <Route path="settings" element={<SettingsPage />}></Route>
        <Route path="my-rooms" element={<MyRoomsPage />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
