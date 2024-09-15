import React from "react";
import MenuHeader from "../../buttons/MenuHeader";

interface HeaderProps {
  isMobile: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, toggleSidebar }) => {
  return (
    <header className="col-start-2 h-[60px] w-full bg-gray-20 p-4 text-white sm:col-start-1 lg:col-start-2">
      <section className="flex h-full w-full flex-row items-center justify-end sm:px-0 lg:px-5">
        <div className="sm:hidden lg:block">
          {isMobile && (
            <button onClick={toggleSidebar}>
              {/* Aquí puedes agregar un icono de menú o texto para el botón de toggle */}
              Menu
            </button>
          )}
        </div>
        {/* <div>
          <SearchInput />
        </div> */}
        <div>
          <MenuHeader />
          {/* <ChangeTheme /> */}
        </div>
      </section>
    </header>
  );
};

export default Header;
