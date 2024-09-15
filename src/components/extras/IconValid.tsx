import imgCheck from "../../assets/check_circle_outline.svg";
export default function IconValid() {
  return (
    <div className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-semanticSuccess-50">
      <img src={imgCheck} alt="Check" />
    </div>
  );
}
