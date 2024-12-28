import { useEffect, useState } from "react";

const WebSocketComponent = ({ url }: { url: string }) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WebSocket connected");

      socket.send(
        JSON.stringify({
          type: "subscribe",
          channels: [{ name: "ticker", product_ids: ["BTC-USD"] }],
        })
      );
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  return (
    <div>
      <h1>WebSocket Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
