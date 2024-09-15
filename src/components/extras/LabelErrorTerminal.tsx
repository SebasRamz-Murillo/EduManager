export default function LabelErrorTerminal(props: { text: string }) {
  return (
    <p className={`text-start text-[10px] text-semanticDanger-70`}>
      {props.text}
    </p>
  );
}
