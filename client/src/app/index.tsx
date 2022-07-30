import "./global.scss";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/home";
import Watch from "@pages/watch";
import AnimeDetailsPage from "@pages/anime-details";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import SideBar from "@components/SideBar";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime-details" element={<AnimeDetailsPage />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
        <SideBar />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
