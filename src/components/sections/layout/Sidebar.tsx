import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Building2,
  ChevronDown,
  Check,
  Menu,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, isMobile }) => {
  const [salonesOpen, setSalonesOpen] = useState(false);
  const location = useLocation();
  const [groups, setGroups] = useState<any[]>([]); // Para almacenar todos los grupos de cada materia

  useEffect(() => {
    const USER = JSON.parse(localStorage.getItem("user") || "{}");

    if (USER && USER.subjects) {
      // console.log("Si hay datos en el localstorage", USER);

      // Extraer todos los grupos (units) de cada materia (subject)
      const allGroups = USER.subjects.flatMap((subject: any) => subject.groups);

      setGroups(allGroups); // Guardar los grupos en el estado
    } else {
    }
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/panel/home":
        return "Dashboard";
      case "/panel/horario":
        return "Horario";
      case "/panel/materias":
        return "Mis materias";
      default:
        return "Panel";
    }
  };

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between border-b border-gray-700 p-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold sm:hidden lg:block">
            {getPageTitle()}
          </span>
        </div>
        <Building2 size={24} />
      </div>
      <nav className="flex-grow space-y-2 p-4">
        <Link
          to="/panel/home"
          className="flex items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-800"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/panel/horario"
          className="flex items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-800"
        >
          <Calendar size={20} />
          <span>Horario</span>
        </Link>
        <Link
          to="/panel/materias"
          className="flex items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-800"
        >
          <BookOpen size={20} />
          <span>Mis materias</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => setSalonesOpen(!salonesOpen)}
            className="flex w-full items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-800"
          >
            <div className="flex items-center space-x-3">
              <Building2 size={20} />
              <span>Salones</span>
            </div>
            <ChevronDown
              size={16}
              className={`transform transition-transform ${salonesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {salonesOpen && (
            <div className="mt-2 rounded-lg bg-gray-800 shadow-lg">
              {groups.map((salon, index) => (
                <button
                  key={index}
                  className="flex w-full items-center p-2 transition-colors hover:bg-gray-700"
                >
                  <Check size={16} className="mr-2" />
                  <span>
                    {salon.number}
                    {salon.letter}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div className="border-t border-gray-700 p-4">
        <span className="text-sm text-gray-400">EduManager-Team</span>
      </div>
    </>
  );

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed left-4 top-2 z-50 rounded-md bg-gray-900 p-2 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      <aside
        className={`fixed left-0 top-0 z-10 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out ${
          isMobile ? (isOpen ? "w-64" : "w-0") : "w-64"
        } ${isMobile && !isOpen ? "overflow-hidden" : ""}`}
      >
        {(!isMobile || isOpen) && <SidebarContent />}
      </aside>
    </>
  );
};

export default Sidebar;
