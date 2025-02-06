import { useRoutes } from "react-router-dom";
import { arrRoutes } from "./router";
import FloatMenu from "./components/FloatMenu";

function App() {
  const routes = useRoutes(arrRoutes);
  return (
    <>
      {routes}
      <FloatMenu />
    </>
  );
}

export default App;
