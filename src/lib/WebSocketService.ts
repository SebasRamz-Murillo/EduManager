// Archivo: WebSocketService.ts
class WebSocketService {
  private socket: WebSocket | null = null;
  private messageLog: ((message: string) => void) | null = null;

  constructor(url: string) {
    this.socket = new WebSocket(url);
    this.setupSocketHandlers();
  }

  // Configurar los eventos del WebSocket
  private setupSocketHandlers() {
    if (!this.socket) return;

    this.socket.onopen = (event) => {
      this.logMessage("[open] Connection established");
    };

    this.socket.onmessage = (event) => {
      this.handleMessage(event.data);
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        this.logMessage(
          `[close] Connection closed cleanly, code=${event.code}, reason=${event.reason}`,
        );
      } else {
        this.logMessage("[close] Connection died");
      }
    };

    this.socket.onerror = (error) => {
      this.logMessage(`[error] ${error}`);
    };
  }

  // Manejar el mensaje recibido y aplicarle formateo
  private handleMessage(data: string) {
    data = data.trim(); // Limpiar espacios innecesarios
    this.logMessage(data + " "); // Agregar un espacio entre los fragmentos
  }

  // Método para enviar mensajes
  public sendMessage(message: string) {
    if (this.socket) {
      this.socket.send(
        JSON.stringify({
          type: "message",
          content: [{ role: "user", content: message.trim() }],
        }),
      );
      this.logMessage(`Sent: ${message.trim()}`);
    }
  }

  // Método para loguear mensajes
  private logMessage(message: string) {
    if (this.messageLog) {
      this.messageLog(message);
    }
  }

  // Método para registrar un callback para manejar los logs de mensajes
  public registerLogHandler(callback: (message: string) => void) {
    this.messageLog = callback;
  }
}

// Exportar una instancia del WebSocketService
export const websocketService = new WebSocketService("ws://localhost:8000/ws");
