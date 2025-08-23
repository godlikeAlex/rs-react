import { Route, Routes } from "react-router";

import { MainPage } from "@/pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
