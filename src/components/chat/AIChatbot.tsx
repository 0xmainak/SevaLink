"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateChatResponse } from "@/actions/chat";

type Message = { role: "assistant" | "user"; content: string };

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm the SevaLink Virtual Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMsg: Message = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");

    startTransition(async () => {
      // Send conversation to the server action, excluding the very first welcome message if desired
      // But passing it is fine too
      const responseContent = await generateChatResponse(newMessages);
      setMessages(prev => [...prev, { role: "assistant", content: responseContent }]);
    });
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-700 hover:scale-105 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col border border-stone-200 z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-200">
          <div className="flex items-center justify-between px-4 py-3 bg-orange-600 text-white shadow-sm">
            <div className="flex items-center gap-2 font-medium">
              <Bot size={20} />
              <span>SevaLink Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2 max-w-[85%]",
                  m.role === "user" ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  m.role === "user" ? "bg-stone-200 text-stone-600" : "bg-orange-100 text-orange-600"
                )}>
                  {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={cn(
                    "px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm",
                    m.role === "user" 
                      ? "bg-orange-600 text-white rounded-tr-sm" 
                      : "bg-white text-stone-800 border border-stone-100 rounded-tl-sm"
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isPending && (
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-orange-100 text-orange-600">
                  <Bot size={16} />
                </div>
                <div className="px-3 py-3 rounded-2xl bg-white border border-stone-100 rounded-tl-sm flex items-center gap-2 text-stone-500 shadow-sm">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-xs">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-100 flex gap-2 items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isPending}
              placeholder="Ask a question..."
              className="flex-1 rounded-full border-stone-200 bg-stone-50"
            />
            <Button type="submit" size="icon" disabled={isPending} className="shrink-0 w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 transition">
              <Send size={18} className="ml-1 shrink-0" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
