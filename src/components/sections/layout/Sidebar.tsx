import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, BookOpen, Building2, ChevronDown, Menu } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [salonesOpen, setSalonesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Menu size={24} />
          <span className="text-xl font-semibold">Board</span>
        </div>
      </div>
      <nav className="flex-grow p-4 space-y-4">
        <Link to="/panel/home" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <LayoutDashboard size={24} />
          <span className="text-lg">Dashboard</span>
        </Link>
        <Link to="/panel/horario" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <Calendar size={24} />
          <span className="text-lg">Horario</span>
        </Link>
        <Link to="/panel/materias" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <BookOpen size={24} />
          <span className="text-lg">Mis materias</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => setSalonesOpen(!salonesOpen)}
            className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <Building2 size={24} />
              <span className="text-lg">Salones</span>
            </div>
            <ChevronDown size={20} className={`transform transition-transform ${salonesOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </nav>
    </>
  );

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md"
        >
          <Menu size={24} />
        </button>
      )}
      <aside className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out ${
        isMobile ? (isOpen ? 'w-64' : 'w-0') : 'w-64'
      } ${isMobile && !isOpen ? 'overflow-hidden' : ''}`}>
        {(!isMobile || isOpen) && <SidebarContent />}
      </aside>
    </>
  );
}