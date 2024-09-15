import { subjectsArray1 } from "../../lib/DataJson/Subjects";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function GridStudents() {
  const [searchParams] = useSearchParams();
  const [students, setStudents] = useState<any[]>([]);
  const [hoverUser, setHoverUser] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const materia = searchParams.get("materia");
  const grupo = searchParams.get("grupo");

  useEffect(() => {
    if (materia && grupo) {
      const subject = subjectsArray1.find(
        (subj) => subj.id === materia && subj.id === grupo,
      );
      if (subject) {
        setStudents(subjectsArray1);
      }
    }
  }, [materia, grupo]);

  const handleMouseEnter = (event: React.MouseEvent, student: any) => {
    // Obtenemos la posición del elemento
    const rect = event.currentTarget.getBoundingClientRect();
    const top = rect.bottom; // Posición abajo del elemento
    const left = rect.left; // Mantener horizontalmente alineado
    setUser(student);
    setPosition({ top, left });
    setHoverUser(true);
  };

  return (
    <>
      <article className="grid h-full max-h-[70vh] gap-3 overflow-y-auto rounded-xl sm:grid-cols-4 lg:grid-cols-6">
        {students.map((student) => (
          <div
            onMouseEnter={(event) => handleMouseEnter(event, student)}
            onMouseLeave={() => setHoverUser(false)} // Ocultar al dejar de hacer hover
            key={`${student.id}-${student.group_id}`}
            className="relative flex w-full flex-col items-center rounded-xl bg-slate-300 p-4 text-center hover:bg-slate-400 sm:h-[130px]"
          >
            <div
              className={`h-10 w-10 rounded-full bg-black ${student.status < 5 && "bg-red-500"} ${student.status > 7 && "bg-success-70"} ${student.status >= 5 && student.status <= 7 && "bg-yellow-500"}`}
            ></div>
            <h1>
              {student.name} {student.lastname}
            </h1>
          </div>
        ))}

        {hoverUser && (
          <section
            className="absolute z-10 rounded-xl bg-white p-4 shadow-lg"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: "translateY(10px)", // Desplazamiento para que esté justo debajo
            }}
          >
            <h1 className="font-bold">Información del alumno</h1>
            <h2>
              {user.name} {user.lastname}
            </h2>
            {user.status < 5 && <p>Rendimiento: Malo</p>}
            {user.status > 7 && <p>Rendimiento: Bueno</p>}
            {user.status >= 5 && user.status <= 7 && (
              <p>Rendimiento: Regular</p>
            )}
          </section>
        )}
      </article>
    </>
  );
}
