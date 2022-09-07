import "./global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@pages/home";
import Watch from "@pages/watch";
import AnimeDetailsPage from "@pages/anime-details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
          <Route path="*" element={<Navigate to={"/"} replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/anime-details/:animeId" element={<AnimeDetailsPage />} />
          <Route path="/watch/:episodeId" element={<Watch />} />
        </Routes>
        <SideBar />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
