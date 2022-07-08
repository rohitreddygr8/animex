import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.scss";
import Layout from "@components/Layout";
import Home from "@pages/home";
import Watch from "@pages/watch";
export const SERVER_URL = import.meta.env.PROD
  ? "https://animex-server.herokuapp.com/"
  : "http://localhost:4000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
