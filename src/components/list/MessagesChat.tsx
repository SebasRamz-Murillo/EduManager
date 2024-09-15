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
        // Si llega [DONE], creamos un nuevo div de mensaje
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
    addNewMessage(`Sent: ${newMessage}`, 1, "Usuario");
    setNewMessage(""); // Limpiar el input después de enviar
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>WebSocket Chat</h1>
      {/* Contenedor de mensajes */}
      <div
        id="messageLog"
        ref={messageLogRef}
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        {messages.map((message, index) => (
          <div key={`${message.id}-${index}`}>
            {message.user_id === 1 ? (
              <div style={{ textAlign: "right", marginBottom: "10px" }}>
                <strong>{message.user}:</strong>{" "}
                <ReactMarkdown>{message.message}</ReactMarkdown>
              </div>
            ) : (
              <div style={{ textAlign: "left", marginBottom: "10px" }}>
                <strong>{message.user}:</strong>{" "}
                <ReactMarkdown>{message.message}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input de mensaje */}
      <TextField
        id="messageInput"
        variant="outlined"
        fullWidth
        label="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button
        id="sendButton"
        onClick={handleSendMessage}
        style={{ padding: "5px 10px", marginTop: "10px" }}
      >
        Send
      </button>
    </div>
  );
}
