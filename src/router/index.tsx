import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import Home from "../pages/Home";
import { PasswordPage } from "../pages/Password";
import { SignupPage } from "../pages/Signup";
//<Route path="stack" element={<TecPage />}></Route>

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="password" element={<PasswordPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
