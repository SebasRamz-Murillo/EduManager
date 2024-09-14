import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Panel() {
  return (
    <section className="grid h-screen w-full grid-cols-[100px_1fr] grid-rows-[56px_1fr] sm:grid-cols-[1fr] lg:grid-cols-[100px_1fr]">
      {/* Sidebar en la izquierda, ocupa todo el alto, visible solo en lg */}
      <Sidebar />
      {/* Header en la parte superior derecha */}
      <Header />
      {/* Contenido debajo del header */}
      <main className="col-start-2 row-start-2 w-full bg-gray-20 sm:col-start-1 lg:col-start-2">
        <Outlet /> {/* Aquí se mostrarán las rutas hijas */}
      </main>
    </section>
  );
}
