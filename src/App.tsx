import { Routes, Route } from "react-router-dom";
import Panel from "./components/sections/panel/Panel";
import Home from "./components/sections/panel/Home";
import About from "./components/sections/test/About";
import EstudianteInfo from "./components/sections/estudiante/EstudianteInfo";
import ClassSchedule from "./components/sections/horario/horario";

function App() {
  return (
    <Routes>
      
      <Route path="/panel" element={<Panel />}
      
       >
        {/* Rutas hijas */}
        <Route path="/panel/home" element={<Home />} />
        <Route path="/panel/about" element={<About />} />
        <Route path="/panel/estudiante" element={<EstudianteInfo />} />
        <Route path="/panel/horario" element={<ClassSchedule />} />

      </Route>
    </Routes>
  );
}

export default App;
