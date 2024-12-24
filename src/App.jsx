import { Route, Routes } from "react-router";
import Layout from "./app/dashboard/layout";
import Home from "./app/dashboard/home";
import ConfigProvider from "./context/template-config";
import { FabricProvider } from "./context/fabric";

function App() {
  return (
    <>
      <ConfigProvider>
        <FabricProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </FabricProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
