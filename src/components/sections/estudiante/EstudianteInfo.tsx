import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface StudentData {
  name: string;
  status: string;
  summary: string;
}

export default function EstudianteInfo() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState<StudentData | null>(null);

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
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Detalle | Tareas | Asistencias</h1>
        <div className="text-sm">materia | grupo</div>
      </div>

      <div className="grid grid-cols-[0.3fr_0.7fr] gap-4">
        <div className="flex flex-col items-center">
          <div className="mb-2 h-32 w-32 rounded-full bg-pink-200"></div>
          <div className="text-center">
            <div className="font-semibold">
              {studentData?.name || "Nombre Alumno"}
            </div>
            <div className="mt-1 rounded bg-pink-100 px-2 py-1 text-sm text-pink-800">
              {studentData?.status || "estado - psicologico"}
            </div>
          </div>
        </div>

        <div className="rounded bg-purple-100 p-4">
          <h2 className="mb-2 font-semibold">Resumen Alumno:</h2>
          <p className="mb-4">{studentData?.summary || "resumen perron"}</p>
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            escribir mensaje
          </button>
        </div>
      </div>

      <div className="my-4 grid grid-cols-3 gap-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="rounded-full border-2 border-dashed border-purple-200 p-4 text-center"
          >
            rendimiento relativo
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="rounded border-2 border-dashed border-purple-200 p-4">
          <h3 className="mb-2 font-semibold">Tareas de unidad</h3>
          <div className="flex h-32 items-center justify-center">
            {/* Placeholder for task graph */}
            Grafica 1, circular?
          </div>
        </div>
        <div className="rounded border-2 border-dashed border-purple-200 p-4">
          <h3 className="mb-2 font-semibold">Asistencias en unidad</h3>
          <div className="flex h-32 items-center justify-center">
            {/* Placeholder for attendance graph */}
            Grafica 2
          </div>
        </div>
      </div>
    </div>
  );
}
