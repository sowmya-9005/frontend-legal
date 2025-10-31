import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    // Bot reply
    setTimeout(() => {
      const botReply = {
        text: `You asked: "${input}". Here’s a related answer.`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chatbot-container">
      {/* Toggle Button */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            Chatbot
            <span className="close-btn" onClick={toggleChat}>
              ✖
            </span>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
