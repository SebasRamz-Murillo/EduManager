import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { subjectsArray2 } from "../../lib/DataJson/Subjects";

export default function GridStudents() {
  const [searchParams] = useSearchParams();
  const [students, setStudents] = useState<any[]>([]);
  const [hoverUser, setHoverUser] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const materia = searchParams.get("materia");
  const grupo = searchParams.get("grupo");

  // Aquí ajustamos el código para obtener estudiantes desde los grupos
  useEffect(() => {
    const filteredStudents = subjectsArray2
      .filter((subject) => subject.id === materia)
      .flatMap((subject) =>
        subject.groups
          ?.filter((group) => group.id === grupo)
          .flatMap((group) => group.students),
      );
    setStudents(filteredStudents);
    console.log(filteredStudents);
  }, [materia, grupo]);

  const handleMouseEnter = (event: React.MouseEvent, student: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const top = rect.bottom;
    const left = rect.left;
    setUser(student);
    setPosition({ top, left });
    setHoverUser(true);
  };

  return (
    <>
      <article className="grid h-full max-h-[90vh] gap-5 overflow-y-auto rounded-xl sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div
            onMouseEnter={(event) => handleMouseEnter(event, student)}
            onMouseLeave={() => setHoverUser(false)}
            key={student.id}
            className="relative flex w-full flex-col items-center rounded-xl bg-slate-300 p-4 text-center hover:bg-slate-400 sm:h-[130px]"
          >
            <div
              className={`h-10 w-10 rounded-full bg-black ${
                student.status < 5 && "bg-red-500"
              } ${student.status > 7 && "bg-success-70"} ${
                student.status >= 5 && student.status <= 7 && "bg-yellow-500"
              }`}
            ></div>
            <h1>
              {student.first_name} {student.last_name}
            </h1>
          </div>
        ))}

        {hoverUser && (
          <section
            className="absolute z-10 rounded-xl bg-white p-4 shadow-lg"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: "translateY(10px)",
            }}
          >
            <h1 className="font-bold">Información del alumno</h1>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.email}</p>
            <p>Edad {user.age}</p>
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
