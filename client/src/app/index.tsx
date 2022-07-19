import "./global.scss";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/home";
import Watch from "@pages/watch";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/watch" element={<Layout children={<Watch />} />} />
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
