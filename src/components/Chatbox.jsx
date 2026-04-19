import { useState } from "react";

export default function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about Aaron's portfolio.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    // SIMPLE AI RESPONSE (temporary)
    const botReply = getBotResponse(input);

    setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
    setInput("");
  };

  // 🔥 Replace this later with real AI
  const getBotResponse = (input) => {
    if (input.toLowerCase().includes("skills"))
      return "Aaron knows HTML, CSS, and React.";
    if (input.toLowerCase().includes("projects"))
      return "Check out the projects section!";
    if(input.includes("about"))
        return "Aaron is a student passionate about web development."
    if(input.includes("contact"))
        return "You can reach Aaron via email in the contact section.";
    return "I'm a simple AI assistant for this portfolio.";
  };

  return (
    <div style={styles.chatbox}>
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div key={i} style={msg.sender === "user" ? styles.user : styles.bot}>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  chatbox: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "300px",
    background: "#222",
    color: "white",
    padding: "10px",
    borderRadius: "10px"
  },
  messages: {
    height: "200px",
    overflowY: "auto",
    marginBottom: "10px"
  },
  user: {
    textAlign: "right",
    margin: "5px"
  },
  bot: {
    textAlign: "left",
    margin: "5px"
  },
  inputArea: {
    display: "flex",
    gap: "5px"
  }
};