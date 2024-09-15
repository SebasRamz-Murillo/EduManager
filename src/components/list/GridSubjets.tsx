import { subjectsArray2 } from "../../lib/DataJson/Subjects";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function GridSubjects() {
  const [searchParams] = useSearchParams();
  const [groups, setGroups] = useState<any[]>([]);
  const navigate = useNavigate();

  const materia = searchParams.get("materia");
  const grupo = searchParams.get("grupo");

  // Filtrar y obtener los grupos
  useEffect(() => {
    if (materia && grupo) {
      const filteredGroups = subjectsArray2
        .filter((subject) => subject.id === materia)
        .flatMap((subject) =>
          subject.groups?.map((group) => ({
            ...group,
            subjectId: subject.id, // Agregar el ID de la materia
            subjectName: subject.name,
            subjectDescription: subject.description,
            units: subject.units, // Agregamos las unidades aquí
          })),
        );
      setGroups(filteredGroups);
    } else {
      const allGroups = subjectsArray2.flatMap((subject) =>
        subject.groups?.map((group) => ({
          ...group,
          subjectId: subject.id, // Agregar el ID de la materia
          subjectName: subject.name,
          subjectDescription: subject.description,
          units: subject.units, // Agregamos las unidades aquí
        })),
      );
      setGroups(allGroups);
    }
  }, [materia, grupo]);

  // Función para navegar a la página de alumnos
  const handleGoToStudents = (group: any) => {
    console.log(group);
    // Navegar pasando tanto el id de la materia como del grupo
    navigate(
      `/panel/home/alumnos?materia=${group.subjectId}&grupo=${group.id}`,
    );
  };

  // Renderizar la lista de grupos
  return (
    <>
      <article className="grid h-full max-h-[90vh] gap-5 overflow-y-auto rounded-xl sm:grid-cols-1 lg:grid-cols-2">
        {groups.map((group) => (
          <button
            onClick={() => handleGoToStudents(group)}
            key={group.group_id}
            className="flex h-[200px] w-full flex-col items-start rounded-xl bg-slate-300 px-4 py-2 leading-normal hover:bg-slate-400"
          >
            <h1 className="text-[30px] font-bold text-black">
              {group.subjectName} - Grupo {group.letter} {group.number}
            </h1>
            <p className="text-[14px]">{group.subjectDescription}</p>
            <div className="text-start">
              <h2 className="text-[20px] font-semibold">Unidades:</h2>
              <ul className="list-disc pl-5 text-[14px]">
                {group.units.map((unit: string, index: number) => (
                  <li key={index} className="text-sm">
                    {unit}
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </article>
    </>
  );
}
