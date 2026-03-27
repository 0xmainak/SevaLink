"use server";

import Groq from "groq-sdk";

const groq = process.env.GROQ_API_KEY ? new Groq({ apiKey: process.env.GROQ_API_KEY }) : null;

export async function generateChatResponse(
  conversation: { role: "system" | "user" | "assistant"; content: string }[]
) {
  if (!groq) {
    return "Please configure the GROQ_API_KEY in your environment variables to enable AI responses.";
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are the SevaLink AI Assistant for a healthcare NGO. Be concise, empathetic, helpful, and polite. Keep responses short. If you are asked about an emergency, explicitly tell them to call local emergency services immediately.",
        },
        ...conversation,
      ],
      model: "llama-3.1-8b-instant", // You can switch this to another Groq model if preferred
      max_tokens: 250,
    });

    return (
      chatCompletion.choices[0]?.message?.content ||
      "I couldn't process that. Try again later."
    );
  } catch (error) {
    console.error("Groq API Error:", error);
    return "I'm having trouble connecting to my AI brain. Please try again later.";
  }
}
