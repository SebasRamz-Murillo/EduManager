import BadgeNotification from "../layout/BadgeNotification";
import { subjects } from "../../../lib/DataJson/Subjects";

export default function Home() {
  return (
    <section className="grid h-screen w-full grid-cols-[0.6fr_0.4fr] grid-rows-[0.1fr_1fr_1fr] gap-3">
      {/* Primer div con menor altura usando fracciones */}
      <BadgeNotification />

      {/* Segundo div en la segunda columna */}
      <div className="h-full w-full bg-slate-500 p-4">
        <article className="grid grid-cols-2 gap-3">
          {subjects.map((subject) => (
            <div className="h-full w-full bg-slate-300 p-4">
              <h1>{subject.name}</h1>
              <p>{subject.teacher}</p>{" "}
            </div>
          ))}
        </article>
      </div>

      {/* Tercer div en la tercera columna */}
      <div className="h-full w-full bg-slate-500">s</div>

      {/* Cuarto div ocupando las dos columnas */}
      <div className="col-span-2 h-full w-full bg-slate-500">s</div>
    </section>
  );
}
