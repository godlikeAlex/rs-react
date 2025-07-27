import { Routes } from "react-router";
import { Route } from "react-router";

import { DetailPage, MainPage } from "@/pages";

export default function App() {
  return (
    <Routes>
      <Route path=":page?" element={<MainPage />}>
        <Route path=":peopleID" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}
