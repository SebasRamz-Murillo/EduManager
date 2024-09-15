import { TextField } from "@mui/material";
import { Messages } from "../../lib/DataJson/Messages";

export default function MessagesChat() {
  return (
    <>
      <section className="w-full">
        {Messages.map((message) => (
          <div
            key={message.id}
            className={`flex w-full flex-row items-center justify-${message.user_id === 1 ? "end" : "start"} p-4`}
          >
            <article
              className={`flex flex-col items-${message.user_id === 1 ? "end" : "start"} gap-2 leading-normal`}
            >
              <div className="flex flex-row items-center gap-2">
                {message.user_id === 1 ? (
                  <>
                    <div
                      className={`rounded-lg p-3 ${message.user_id === 1 ? "bg-purple-200" : "bg-purple-400"}`}
                    >
                      <h1>{message.message}</h1>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-black"></div>
                  </>
                ) : (
                  <>
                    <div className="h-10 w-10 rounded-full bg-black"></div>
                    <div className="rounded-lg bg-purple-400 p-3">
                      <h1>{message.message}</h1>
                    </div>
                  </>
                )}
              </div>
              <p className="">{message.user}</p>
            </article>
          </div>
        ))}
      </section>
      <section className="flex w-full flex-row">
        <TextField
          variant="outlined"
          label="Escribe un mensaje"
          fullWidth={true}
          sx={{
            "& label.Mui-focused": { color: "purple" },
            "& .MuiInput-underline:after": { borderBottomColor: "purple" },
          }}
        />
        <button className="w-[100px]">Enviar</button>
      </section>
    </>
  );
}
