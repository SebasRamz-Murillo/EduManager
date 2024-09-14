import { subjects } from "../../../lib/DataJson/Subjects";

export default function GridStudents() {
  return (
    <article className="grid grid-cols-2 gap-3">
      {subjects.map((subject) => (
        <div className="h-full w-full bg-slate-300 p-4">
          <h1>{subject.name}</h1>
          <p>{subject.teacher}</p>{" "}
        </div>
      ))}
    </article>
  );
}
