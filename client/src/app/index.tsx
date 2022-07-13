import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.scss";
import Layout from "@components/Layout";
import Home from "@pages/home";
import Watch from "@pages/watch";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
