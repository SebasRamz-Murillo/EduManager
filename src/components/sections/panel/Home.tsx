import BadgeNotification from "../layout/BadgeNotification";
import GridSubjets from "../layout/GridSubjets";

export default function Home() {
  return (
    <section className="grid h-screen w-full gap-3 sm:grid-cols-1 sm:grid-rows-[0.1fr_1fr_1fr] lg:grid-cols-[0.6fr_0.4fr] lg:grid-rows-[0.1fr_1fr_1fr]">
      {/* Primer div con menor altura usando fracciones */}
      <div className="col-span-2 flex h-full items-center px-2">
        <BadgeNotification />
      </div>
      {/* Segundo div en la segunda columna */}
      <div className="w-full bg-slate-500 p-4 sm:col-span-2 sm:h-[300px] lg:col-span-1 lg:h-[500px]">
        <GridSubjets />
      </div>
      {/* Tercer div en la tercera columna */}
      <div className="h-full w-full bg-slate-500 sm:hidden lg:block">s</div>
      {/* Cuarto div ocupando las dos columnas */}
      <div className="col-span-2 h-full w-full bg-slate-500">s</div>
    </section>
  );
}
