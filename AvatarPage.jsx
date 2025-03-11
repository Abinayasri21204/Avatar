import React, { useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

const AvatarPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() === "") return;
    setMessages([...messages, { text: inputText, type: "user" }]);
    setInputText("");
  };

  const handleMicClick = () => {
    alert("Voice recognition activated! Implement speech-to-text here.");
  };

  return (
    <div className="chat-container" style={{ height: '100%' }}>
      <h2 className="section-title">Chatbot Text Output</h2>
      <div className="chat-output">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet...</p>
        ) : (
          messages.map((msg, index) => (
            <p
              key={index}
              className={`chat-message ${
                msg.type === "user" ? "text-right text-blue-600" : "text-left"
              }`}
            >
              {msg.text}
            </p>
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text..."
          className="text-field"
        />
        <button onClick={handleSend} className="send-button">
          <FaPaperPlane />
        </button>
        <button className="mic-button" onClick={handleMicClick}>
          <FaMicrophone />
        </button>
      </div>
    </div>
  );
};

export default AvatarPage;
