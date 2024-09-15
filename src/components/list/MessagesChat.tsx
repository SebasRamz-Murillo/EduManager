import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { Messages as initialMessages } from "../../lib/DataJson/Messages";

export default function MessagesChat() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor de mensajes
  const [messages, setMessages] = useState(initialMessages); //
  const [newMessage, setNewMessage] = useState("");

  // Función para desplazar el contenedor de mensajes al último mensaje
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  // Desplazar al último mensaje cuando los mensajes cambian
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulación de agregar un nuevo mensaje
  const handleSendMessage = () => {
    const Message = {
      id: messages.length + 1,
      user_id: 1,
      message: newMessage,
      user: "Usuario Actual",
    };
    setMessages([...messages, Message]);
  };

  return (
    <>
      {/* Contenedor para los mensajes con scroll */}
      <section
        ref={messagesContainerRef}
        className="h-[400px] w-full overflow-y-auto p-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex w-full flex-row items-center justify-${
              message.user_id === 1 ? "end" : "start"
            } p-4`}
          >
            <article
              className={`flex flex-col items-${
                message.user_id === 1 ? "end" : "start"
              } gap-2 leading-normal`}
            >
              <div className="flex flex-row items-center gap-2">
                {message.user_id === 1 ? (
                  <>
                    <div
                      className={`rounded-lg p-3 ${
                        message.user_id === 1
                          ? "bg-purple-200"
                          : "bg-purple-400"
                      }`}
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
        {/* Este div vacío es el punto de referencia para el scroll al último mensaje */}
        <div ref={messagesEndRef} />
      </section>

      {/* Contenedor para el input de mensaje */}
      <section className="flex w-full flex-row p-4">
        <TextField
          variant="outlined"
          label="Escribe un mensaje"
          fullWidth={true}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            "& label.Mui-focused": { color: "purple" },
            "& .MuiInput-underline:after": { borderBottomColor: "purple" },
          }}
        />
        <button className="w-[100px]" onClick={handleSendMessage}>
          Enviar
        </button>
      </section>
    </>
  );
}
