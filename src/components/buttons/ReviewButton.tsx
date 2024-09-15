import { TextField } from "@mui/material";

export default function ReviewButton() {
  return (
    <section className="w-ful flex h-full flex-col items-end gap-2 p-5">
      <TextField
        multiline={true}
        fullWidth={true}
        placeholder="Escribe tus comentarios"
        rows={4}
      />
      <button className="w-[300px] rounded-lg bg-purple-300 p-2">Enviar</button>
    </section>
  );
}
