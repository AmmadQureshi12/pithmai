"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "model"; text: string };

const starterMessage: Message = {
  role: "model",
  text: "Hello! I am AI assistant of Sir Zeeshan and my creator is Ammad Qureshi. Ask me about hotel English, guest conversations, grammar, or roleplay.",
};

export default function AiChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([starterMessage]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    const nextMessages = [...messages, { role: "user" as const, text: message }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history: nextMessages.slice(1, -1) }),
      });
      const data = await response.json() as { reply?: string; message?: string };
      setMessages((current) => [...current, { role: "model", text: response.ok && data.reply ? data.reply : data.message ?? "I could not answer that right now." }]);
    } catch {
      setMessages((current) => [...current, { role: "model", text: "I could not connect to the AI coach. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return <>
    <button type="button" className="chat-launcher" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close AI coach" : "Open AI coach"}>
      <span className="chat-launcher-mark">✦</span>
      <span className="chat-launcher-label">AI Coach</span>
    </button>
    {open && <aside className="chat-panel" aria-label="HotelSpeak AI coach">
      <div className="chat-panel-header"><div><p className="chat-kicker">HotelSpeak AI</p><h2>Practice coach</h2></div><button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label="Close AI coach">×</button></div>
      <div className="chat-messages">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`chat-bubble ${message.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}>{message.text}</div>)}{loading && <div className="chat-bubble chat-bubble-ai chat-typing">Thinking...</div>}</div>
      <form className="chat-form" onSubmit={sendMessage}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask your English coach..." aria-label="Message AI coach" /><button type="submit" disabled={loading || !input.trim()} aria-label="Send message">↑</button></form>
    </aside>}
  </>;
}
