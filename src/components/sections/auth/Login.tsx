import CarruselLogin from "../../extras/CarruselLogin";
import RightSideLogin from "../../extras/RightSideLogin";
export default function Login() {
  return (
    <main className="sm:flex sm:h-[280px] sm:flex-col lg:grid lg:h-screen lg:grid-cols-2">
      <CarruselLogin />
      <RightSideLogin />
    </main>
  );
}
