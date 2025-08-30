import { Logo, Spinner } from "@/components";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Logo />
      <Spinner
        title="Please wait, data is loading."
        description=" This may take up to 3 minutes."
      />
    </MainLayout>
  );
}

export default App;
