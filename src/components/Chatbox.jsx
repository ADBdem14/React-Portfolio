import { useMemo, useState } from "react";
import { portfolioData } from "../data/portfolioData";

const quickPrompts = [
  "Tell me about your background",
  "What skills do you have?",
  "What projects have you built?",
  "How can I contact you?"
];

const systemPrompt = `You are an assistant for ${portfolioData.name}'s portfolio.
Only answer with information provided below and keep answers concise.
Background: ${portfolioData.about}
Education: ${portfolioData.education}
Skills: ${portfolioData.skills.join(", ")}
Projects: ${portfolioData.projects
  .map((project) => `${project.name} - ${project.description}`)
  .join(" | ")}
Contact: email ${portfolioData.email}, phone ${portfolioData.phone}`;

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: portfolioData.assistant.intro,
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const apiBaseUrl = import.meta.env.VITE_OPENAI_BASE_URL ?? "https://api.openai.com/v1/chat/completions";
  const canUseApi = useMemo(() => Boolean(apiKey), [apiKey]);

  const sendMessage = async (preset) => {
    const content = (preset ?? input).trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { text: content, sender: "user" }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const botReply = canUseApi
      ? await getOpenAIResponse(nextMessages, content)
      : getFallbackResponse(content);

    setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    setLoading(false);
  };

  const getOpenAIResponse = async (conversation, content) => {
    try {
      const response = await fetch(apiBaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.3,
          messages: [
            { role: "system", content: systemPrompt },
            ...conversation
              .slice(-8)
              .map((message) => ({
                role: message.sender === "user" ? "user" : "assistant",
                content: message.text
              })),
            { role: "user", content }
          ]
        })
      });

      if (!response.ok) {
        return "I could not reach live AI. You can still use fallback mode without an API key.";
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content ?? "No response returned.";
    } catch {
      return "There was a network issue talking to live AI. Fallback mode still works.";
    }
  };

  const getFallbackResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes("skill")) return `${portfolioData.name} works with ${portfolioData.skills.join(", ")}.`;
    if (q.includes("project")) {
      return portfolioData.projects
        .map((project) => `${project.name}: ${project.description}`)
        .join(" ");
    }
    if (q.includes("about") || q.includes("background")) return portfolioData.about;
    if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
      return `Email ${portfolioData.email} or call ${portfolioData.phone}.`;
    }

    return `Try one of these: ${portfolioData.assistant.fallbackTips.join(" • ")}.`;
  };

  return (
    <aside className={`chatbox ${isOpen ? "open" : ""}`} aria-live="polite">
      <button className="chat-toggle" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close chat" : "Ask AI"}
      </button>

      {isOpen && (
        <>
          <p className={`mode-pill ${canUseApi ? "online" : "offline"}`}>
            {canUseApi ? "Live AI enabled" : "No API key: fallback mode enabled"}
          </p>

          <div className="messages">
            {messages.map((message, index) => (
              <p key={`${message.sender}-${index}`} className={`message ${message.sender}`}>
                {message.text}
              </p>
            ))}
            {loading && <p className="message bot">Thinking…</p>}
          </div>

          <div className="quick-prompts">
            {quickPrompts.map((prompt) => (
              <button key={prompt} onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <div className="input-area">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Aaron's work"
              onKeyDown={(event) => event.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()} disabled={loading}>
              Send
            </button>
          </div>

          {!canUseApi && (
            <small>
              Optional later: add <code>VITE_OPENAI_API_KEY</code> in a <code>.env</code> file.
            </small>
          )}
        </>
      )}
    </aside>
  );
}
