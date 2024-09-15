import MenuHeader from "../../buttons/MenuHeader";
import SearchInput from "../../inputs/SearchInput";

export default function Header() {
  return (
    <header className="col-start-2 h-[60px] w-full bg-gray-20 p-4 text-white sm:col-start-1 lg:col-start-2">
      <section className="flex h-full w-full flex-row items-center justify-between sm:px-0 lg:px-5">
        <div className="sm:hidden lg:block"></div>
        <div>
          <SearchInput />
        </div>
        <div>
          <MenuHeader />
          {/* <ChangeTheme /> */}
        </div>
      </section>
    </header>
  );
}
