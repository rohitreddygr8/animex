import "./global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@components";
import { AnimeDetails, Home, Watch, WatchList } from "@pages";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/anime-details/:animeId" element={<Layout children={<AnimeDetails />} />} />
          <Route path="/watch/:episodeId" element={<Layout children={<Watch />} />} />
          <Route path="/watch-list" element={<Layout children={<WatchList />} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
