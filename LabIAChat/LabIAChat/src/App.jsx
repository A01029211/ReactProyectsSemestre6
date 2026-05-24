import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    // agregar mensaje usuario
    setChat((prev) => [
      ...prev,
      { role: "user", text: userMessage },
      { role: "bot", text: "" },
    ]);

    setMessage("");

    const response = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    let done = false;
    let botText = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();

      done = doneReading;

      const chunkValue = decoder.decode(value);

      botText += chunkValue;

      setChat((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          role: "bot",
          text: botText,
        };

        return updated;
      });
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <h1>ChefBot 🍳</h1>

        <div className="chat-box">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={msg.role === "user" ? "message user" : "message bot"}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="¿De que tienes antojo hoy?"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;