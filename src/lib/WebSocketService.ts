class WebSocketService {
  private socket: WebSocket | null = null;
  private messageLog: ((message: string) => void) | null = null;

  constructor(url: string) {
    try {
      this.socket = new WebSocket(url);
      this.setupSocketHandlers();
    } catch (error) {
      console.error("WebSocket connection failed:", error);
    }
  }

  private setupSocketHandlers() {
    if (!this.socket) return;

    this.socket.onopen = (event) => {
      console.log("WebSocket connection opened", event);
      this.logMessage("[open] Connection established");
    };

    this.socket.onmessage = (event) => {
      console.log("WebSocket message received", event);
      this.logMessage(`Received: ${event.data}`);
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
      console.error("WebSocket error", error);
      this.logMessage(`[error] ${error}`);
    };
  }

  public sendMessage(message: string) {
    if (this.socket) {
      this.socket.send(
        JSON.stringify({
          type: "message",
          content: [{ role: "user", content: message }],
        }),
      );
      this.logMessage(`Sent: ${message}`);
    } else {
      console.error("WebSocket is not connected");
    }
  }

  private logMessage(message: string) {
    if (this.messageLog) {
      this.messageLog(message);
    } else {
      console.log("Log:", message);
    }
  }

  public registerLogHandler(callback: (message: string) => void) {
    this.messageLog = callback;
  }
}

export const websocketService = new WebSocketService("ws://localhost:8000/ws");
