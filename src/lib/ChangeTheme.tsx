import React, { useState, useEffect } from "react";

export default function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Establecer el tema inicial basado en el sistema del usuario o lo que prefieras
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme); // Guardar el tema actual en el localStorage
  }, [theme]);

  return (
    <>
      <button
        onClick={toggleTheme}
        className="rounded bg-gray-700 p-2 text-black"
      >
        Cambiar tema ({theme === "dark" ? "Modo claro" : "Modo oscuro"})
      </button>
    </>
  );
}
