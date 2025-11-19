import { GoogleGenAI, Chat, GenerateContentStreamResult } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Using gemini-2.5-flash for speed and efficiency in a chat context
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, // Slightly strictly professional but creative enough for mentorship
      maxOutputTokens: 8192, // Increased to prevent cut-off in detailed medical explanations
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<GenerateContentStreamResult> => {
  const session = getChatSession();
  // Using stream for a more interactive "live" mentorship feel
  return await session.sendMessageStream({ message });
};