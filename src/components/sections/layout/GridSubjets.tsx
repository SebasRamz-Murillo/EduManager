import { subjects } from "../../../lib/DataJson/Subjects";

export default function GridSubjets() {
  return (
    <article className="grid h-full max-h-[75vh] gap-3 overflow-y-auto rounded-xl sm:grid-cols-1 lg:grid-cols-2">
      {subjects.map((subject) => (
        <div
          key={subject.id}
          className="h-full w-full rounded-xl bg-slate-300 p-4"
        >
          <h1>{subject.name}</h1>
          <p>{subject.teacher}</p>
        </div>
      ))}
    </article>
  );
}
