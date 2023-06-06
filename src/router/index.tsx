import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import Home from "../pages/Home";

//<Route path="stack" element={<TecPage />}></Route>

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
