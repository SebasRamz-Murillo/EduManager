import { Routes, Route } from "react-router-dom";
import Panel from "./components/sections/panel/Panel";
import Home from "./components/sections/panel/Home";
import About from "./components/sections/test/About";
import EstudianteInfo from "./components/sections/estudiante/EstudianteInfo";
import Home2 from "./components/sections/panel/Home2";

function App() {
  return (
    <Routes>
      <Route path="/panel" element={<Panel />}>
        {/* Rutas hijas */}
        <Route path="/panel/home" element={<Home />} />
        <Route path="/panel/home/alumnos" element={<Home2 />} />
        {/**como paso dos query params de materia y grupo a panel/home/{querys}, dame un ejemplo de como seria la url*/}
        <Route path="/panel/about" element={<About />} />
        <Route path="/panel/estudiante" element={<EstudianteInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
