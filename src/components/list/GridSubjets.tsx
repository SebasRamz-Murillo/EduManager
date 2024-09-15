import { subjects } from "../../lib/DataJson/Subjects";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function GridSubjets() {
  // Mueve el hook useSearchParams dentro de la función del componente
  const [searchParams] = useSearchParams();
  const [students, setStudents] = useState<any[]>([]);
  // Obtén los valores de los parámetros 'materia' y 'grupo'
  const materia = searchParams.get("materia");
  const grupo = searchParams.get("grupo");

  useEffect(() => {
    if (materia && grupo) {
      console.log(materia, grupo);
      setStudents(subjects);
      students.filter((subject) => {
        if (
          subject.id === parseInt(materia) &&
          subject.group_id === parseInt(grupo)
        ) {
          console.log(subject);
        }
      });
    }
  }, [materia, grupo]);

  const handleSelectSubject = (subject: any) => {
    console.log(subject);
  };

  return (
    <>
      <article className="grid h-full max-h-[70vh] gap-3 overflow-y-auto rounded-xl sm:grid-cols-1 lg:grid-cols-2">
        {subjects.map((subject) => (
          <Link
            to={`/panel/home/alumnos?materia=${subject.id}&grupo=${subject.group_id}`} // Corregir la URL
            key={subject.id}
            className="flex h-[150px] w-full flex-col items-start rounded-xl bg-slate-300 p-4 hover:bg-slate-400"
          >
            <h1 className="text-[20px] font-bold">{subject.name}</h1>
            <p>{subject.teacher}</p>
          </Link>
        ))}
      </article>
    </>
  );
}
