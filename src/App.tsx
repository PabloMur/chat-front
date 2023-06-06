import React, { Suspense } from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { Loader } from "./components/loader";

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
