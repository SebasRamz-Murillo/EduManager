import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { LayoutDashboard, Calendar, BookOpen, Building2, ChevronDown, Check, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [salonesOpen, setSalonesOpen] = useState(false);
  const [salones, setSalones] = useState(['1A', '2B', '2C', '4E']); // Ejemplo de salones
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
        <span className="text-xl font-semibold">Salones</span>
        <Building2 size={24} />
      </div>
      <nav className="flex-grow p-4 space-y-2">
        <Link to="/panel/home" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/panel/horario" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <Calendar size={20} />
          <span>Horario</span>
        </Link>
        <Link to="/materias" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <BookOpen size={20} />
          <span>Mis materias</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => setSalonesOpen(!salonesOpen)}
            className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Building2 size={20} />
              <span>Salones</span>
            </div>
            <ChevronDown size={16} className={`transform transition-transform ${salonesOpen ? 'rotate-180' : ''}`} />
          </button>
          {salonesOpen && (
            <div className="mt-2 bg-gray-800 rounded-lg shadow-lg">
              {salones.map((salon, index) => (
                <button
                  key={index}
                  className="flex items-center w-full p-2 hover:bg-gray-700 transition-colors"
                >
                  <Check size={16} className="mr-2" />
                  <span>{salon}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <span className="text-sm text-gray-400">Abelardo Garcia Reyes</span>
      </div>
    </>
  );

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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