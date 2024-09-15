import imgInfo from "../../assets/info.svg";

export default function IconInvalid() {
  return (
    <div className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white">
      <img src={imgInfo} alt="Info" />
    </div>
  );
}
