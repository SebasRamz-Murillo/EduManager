import { Routes, Route } from "react-router-dom";
import Panel from "./components/sections/panel/Panel";
import Home from "./components/sections/panel/Home";
import About from "./components/sections/test/About";

function App() {
  return (
    <Routes>
      <Route path="/panel" element={<Panel />}>
        {/* Rutas hijas */}
        <Route path="/panel/home" element={<Home />} />
        <Route path="/panel/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
