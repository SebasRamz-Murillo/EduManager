import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BadgeNotification from "../layout/BadgeNotification";

export default function EstudianteInfo() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`/api/student/${id}`);
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    if (id) {
      fetchStudentData();
    }
  }, [id]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Detalle | Tareas | Asistencias</h1>
        <div className="text-sm">materia | grupo</div>
      </div>
      
      <div className="grid grid-cols-[0.3fr_0.7fr] gap-4">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-pink-200 rounded-full mb-2"></div>
          <div className="text-center">
            <div className="font-semibold">{studentData?.name || "Nombre Alumno"}</div>
            <div className="bg-pink-100 text-pink-800 text-sm px-2 py-1 rounded mt-1">
              {studentData?.status || "estado - psicologico"}
            </div>
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Resumen Alumno:</h2>
          <p className="mb-4">{studentData?.summary || "resumen perron"}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            escribir mensaje
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 my-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="border-2 border-dashed border-purple-200 rounded-full p-4 text-center">
            rendimiento relativo
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="border-2 border-dashed border-purple-200 rounded p-4">
          <h3 className="font-semibold mb-2">Tareas de unidad</h3>
          <div className="h-32 flex items-center justify-center">
            {/* Placeholder for task graph */}
            Grafica 1, circular?
          </div>
        </div>
        <div className="border-2 border-dashed border-purple-200 rounded p-4">
          <h3 className="font-semibold mb-2">Asistencias en unidad</h3>
          <div className="h-32 flex items-center justify-center">
            {/* Placeholder for attendance graph */}
            Grafica 2
          </div>
        </div>
      </div>
    </div>
  );
}