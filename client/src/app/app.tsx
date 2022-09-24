import "./global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, ReactNode, Suspense } from "react";
import { Navbar } from "@components";
const Home = lazy(() => import("../pages/home/home"));
const Watch = lazy(() => import("../pages/watch/watch"));
const AnimeDetails = lazy(() => import("../pages/anime-details/anime-details"));

const LayoutSuspense = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Suspense>{children}</Suspense>
    </>
  );
};

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutSuspense children={<Home />} />} />
          <Route path="/anime-details/:animeId" element={<LayoutSuspense children={<AnimeDetails />} />} />
          <Route path="/watch/:episodeId" element={<LayoutSuspense children={<Watch />} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
