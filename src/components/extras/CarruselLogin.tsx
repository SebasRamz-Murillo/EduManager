export default function CarruselLogin() {
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
