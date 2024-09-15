import { Routes, Route } from "react-router-dom";
import Panel from "./components/sections/panel/Panel";
import Home from "./components/sections/panel/Home";
import About from "./components/sections/test/About";
import EstudianteInfo from "./components/sections/estudiante/EstudianteInfo";
import ClassSchedule from "./components/sections/horario/horario";
import Home2 from "./components/sections/panel/Home2";
import Login from "./components/sections/auth/Login";
import SubjectCards from "./components/sections/subjects/info_card";
import DailyAttendance from "./components/sections/asistencia/pase_lista";
import AttendanceHistory from "./components/sections/asistencia/lista_asistencia";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/panel" element={<Panel />}>
        {/* Rutas hijas */}
        <Route path="/panel/home" element={<Home />} />
        <Route path="/panel/home/alumnos" element={<Home2 />} />
        {/**como paso dos query params de materia y grupo a panel/home/{querys}, dame un ejemplo de como seria la url*/}
        <Route path="/panel/about" element={<About />} />
        <Route path="/panel/estudiante" element={<EstudianteInfo />} />
        <Route path="/panel/horario" element={<ClassSchedule />} />
        <Route path="/panel/materias" element={<SubjectCards />} />
        <Route path="/panel/materias/asistencia/dia" element={<DailyAttendance />} />
        <Route path="/panel/materias/asistencia" element={<AttendanceHistory />} />

      </Route>
    </Routes>
  );
}

export default App;
