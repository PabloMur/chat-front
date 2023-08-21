import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { Loader } from "./components/loader";
require("dotenv").config();

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
