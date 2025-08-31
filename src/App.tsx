import { Logo } from "@/components";
import MainLayout from "./Layouts/MainLayout";
import { Co2Table } from "./widgets";

function App() {
  return (
    <MainLayout>
      <Logo />
      <Co2Table />
    </MainLayout>
  );
}

export default App;
