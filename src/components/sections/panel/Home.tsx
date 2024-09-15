import GridSubjets from "../../list/GridSubjets";
import MessagesChat from "../../list/MessagesChat";

export default function Home() {
  return (
    <section className="grid w-full gap-3 sm:h-full sm:grid-cols-1 sm:grid-rows-[0.1fr_1fr] lg:h-[88vh] lg:grid-cols-[1fr] lg:grid-rows-[1fr]">
      {/* Primer div con menor altura usando fracciones */}
      {/* <div className="col-span-2 flex h-full items-center px-2">
        <BadgeNotification />
      </div> */}
      {/* Segundo div en la segunda columna */}
      <div className="h-full w-full bg-slate-500 p-4 sm:col-span-2 lg:col-span-1">
        <GridSubjets />
      </div>
      {/* Tercer div en la tercera columna */}
      {/* <div className="h-full w-full flex-col items-start justify-end bg-slate-500 sm:hidden lg:flex">
        <MessagesChat />
      </div> */}
      {/* Cuarto div ocupando las dos columnas */}
      {/* <div className="col-span-2 h-full w-full bg-slate-500">
        <ReviewButton />
      </div> */}
    </section>
  );
}
