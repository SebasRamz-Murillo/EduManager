import SearchIcon from "@mui/icons-material/Search";
export default function SearchInput() {
  return (
    <>
      <input
        className="h-[38px] rounded-lg bg-gray-30 p-2 text-gray-70 focus:outline-none sm:w-full lg:w-[360px]"
        placeholder="Buscar"
      />
      <SearchIcon className="ml-[-30px] text-gray-70" />
    </>
  );
}
