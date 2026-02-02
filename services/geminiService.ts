
import { GoogleGenAI, Type } from "@google/genai";

// Fixed: Always use direct reference to process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAIProjectAssistance(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are the Virtual Assistant for 3Novator Tech, a professional software house. 
        Your goal is to help potential clients refine their project ideas. 
        3Novator services: Web Dev (React/Node), AI Solutions, SaaS, SEO, Marketing, and Design. 
        Be professional, concise, and futuristic. Suggest which services 3Novator offers that would fit their query.`,
        temperature: 0.7,
        topK: 40,
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Assistance Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please leave a message and our human team will get back to you shortly!";
  }
}
