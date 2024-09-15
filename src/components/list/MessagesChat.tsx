import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { websocketService } from "../../lib/WebSocketService";

interface Message {
  id: number;
  user_id: number;
  message: string;
  user: string;
}

export default function MessagesChat() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messageLogRef = useRef<HTMLDivElement | null>(null); // Para manejar el contenedor de mensajes
  const [messages, setMessages] = useState<Message[]>([]); // Estado para los mensajes
  const [newMessage, setNewMessage] = useState("");
  const [currentMessage, setCurrentMessage] = useState<string>(""); // Para manejar el mensaje actual

  // Función para desplazarse automáticamente hacia el último mensaje
  const scrollToBottom = () => {
    if (messageLogRef.current) {
      messageLogRef.current.scrollTop = messageLogRef.current.scrollHeight;
    }
  };

  // Función para añadir un nuevo div de mensaje
  const addNewMessage = (content: string, user_id: number, user: string) => {
    const cleanedMessage = cleanMessage(content); // Limpiar el mensaje antes de agregarlo
    const newMessageObj: Message = {
      id: messages.length + 1,
      user_id,
      message: cleanedMessage,
      user,
    };
    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
  };

  // Función para limpiar el mensaje y remover espacios innecesarios
  const cleanMessage = (message: string): string => {
    return message.replace(/\s+/g, " ").trim(); // Eliminar espacios múltiples
  };

  // Función para actualizar el contenido del último mensaje
  const updateLastMessage = (fragment: string) => {
    const cleanedFragment = cleanMessage(fragment); // Limpiar fragmento de texto
    setMessages((prevMessages) => {
      const lastMessage = { ...prevMessages[prevMessages.length - 1] };
      lastMessage.message += cleanedFragment + " ";
      return [...prevMessages.slice(0, -1), lastMessage];
    });
  };

  // Manejar los fragmentos de mensajes recibidos
  useEffect(() => {
    websocketService.registerLogHandler((fragment: string) => {
      if (fragment === "[DONE]") {
        // Si llega [DONE], no lo
        addNewMessage("", 2, "Servidor");
      } else {
        if (
          messages.length > 0 &&
          messages[messages.length - 1].user === "Servidor"
        ) {
          updateLastMessage(fragment.trim());
        } else {
          // Si es el primer fragmento de un mensaje nuevo, creamos un div nuevo
          addNewMessage(fragment.trim(), 2, "Servidor");
        }
      }
    });
  }, [messages]);

  // Manejar el envío de un mensaje
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    websocketService.sendMessage(newMessage);

    // Agregar mensaje del usuario
    addNewMessage(`${newMessage}`, 1, "Usuario");
    setNewMessage(""); // Limpiar el input después de enviar
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-full flex-col items-start justify-between p-4">
      <h1 className="text-[30px] font-bold">Edu GPT</h1>
      {/* Contenedor de mensajes */}
      <div
        id="messageLog"
        ref={messageLogRef}
        style={{
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        {messages.map((message, index) => (
          <div key={`${message.id}-${index}`}>
            {message.user_id === 1 ? (
              <div
                style={{ textAlign: "right", marginBottom: "10px" }}
                className="flex flex-row items-start justify-end gap-2"
              >
                <div
                  className="inline-block max-w-[80%] rounded-lg bg-purple-500 p-4"
                  style={{ wordBreak: "break-word" }}
                >
                  <ReactMarkdown>{message.message}</ReactMarkdown>
                </div>
                <div className="h-10 w-10 rounded-full bg-black"></div>
              </div>
            ) : (
              <div
                style={{ textAlign: "left", marginBottom: "10px" }}
                className="flex flex-row items-start justify-start gap-2"
              >
                <div className="h-10 w-10 rounded-full bg-black"></div>
                <div
                  className="inline-block max-w-[80%] rounded-lg bg-purple-400 p-4"
                  style={{ wordBreak: "break-word" }}
                >
                  <ReactMarkdown>{message.message}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input de mensaje */}
      <section className="flex w-full flex-row items-center justify-center">
        <TextField
          id="messageInput"
          variant="outlined"
          fullWidth
          label="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button id="sendButton" onClick={handleSendMessage}>
          Send
        </button>
      </section>
    </div>
  );
}
