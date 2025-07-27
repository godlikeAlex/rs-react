import { Navigate, Routes } from "react-router";
import { Route } from "react-router";

import { AboutPage, DetailPage, MainPage, NotFound } from "@/pages";
import { MainLayout } from "@/layouts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route element={<MainLayout />}>
        <Route path="home/:page?" element={<MainPage />}>
          <Route path=":peopleID" element={<DetailPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
