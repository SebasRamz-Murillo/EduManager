import logoText from "@/app/assets/img/ElicesINTWhite.svg";
import { useEffect, useState } from "react";
import carruselArrow from "@/app/assets/img/Carouselarrow.svg";

const phrases = [
  {
    title:
      "El deseo es el punto de partida de todo logro, no una esperanza, no un anhelo, sino un vivo deseo palpitante que lo trasciende todo.",
  },
  {
    title:
      "Fija tu mente en un objetivo bien definido y observa cómo rápidamente el mundo se aparta para dejarte pasar.",
  },
  {
    title:
      "No esperes. El momento nunca será el adecuado. Empieza donde estés ahora, trabaja con lo que tengas a tu disposición y encontrarás mejores herramientas a medida que sigas adelante.",
  },
  {
    title:
      "Tus pensamientos dominantes atraen, a través de una ley definida de la naturaleza, por la ruta más corta y más conveniente, su contrapartida física.",
  },
  {
    title:
      "Si no estás aprendiendo mientras estás ganando, te estás engañando a ti mismo y perdiendo la mejor parte de tu compensación.",
  },
  {
    title:
      "El roble duerme en la bellota. El pájaro espera en el huevo, y en la más alta visión del alma, un ángel despierto se agita. Los sueños son las semillas de la realidad.",
  },
];
const currencies = [
  {
    value: "ES",
    label: "ES",
  },
  {
    value: "EN",
    label: "EN",
  },
];

export default function CarruselLogin(props: {}) {
  const [positionCarousel, setPositionCarousel] = useState(0); // Inicializamos en 0 para el primer elemento
  /**
   * Cambia al siguiente slide
   * @returns void
   */
  const nextSlide = () => {
    setPositionCarousel((prev) => (prev + 1) % phrases.length);
  };
  /**
   * Cambia al slide anterior
   * @returns void
   */
  const prevSlide = () => {
    setPositionCarousel((prev) => (prev - 1 + phrases.length) % phrases.length);
  };
  /**
   * Cambia de slide cada 3 segundos
   * @returns void
   */
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000); // Cambia cada 3 segundos
  //   return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  // }, []);

  return (
    <section
      className={`flex flex-col items-center justify-between bg-purple-500 text-center text-white sm:p-[16px] lg:px-[80px] lg:py-[64px]`}
    >
      <div className="flex h-[62px] items-center justify-between sm:w-full lg:w-[565px]">
        <div className="sm:hidden lg:block"></div>
      </div>
      <section className="flex flex-col items-center sm:h-[250px] lg:h-[394px] lg:w-[556px]">
        <img src="src/assets/EduManagerLogo.jpeg" alt="EduManager" />
      </section>

      <footer className="text relative flex h-[62px] items-center justify-center sm:w-full lg:w-[560px]">
        <p className="absolute bottom-0 text-[14px] sm:hidden md:block">
          © TaliDevs
        </p>
        <p className="absolute bottom-0 text-[14px] sm:block md:hidden">
          © TaliDevs
        </p>
      </footer>
    </section>
  );
}
