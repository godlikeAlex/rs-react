import { Routes } from "react-router";
import { Route } from "react-router";

import { MainPage } from "@/pages";

export default function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
}
