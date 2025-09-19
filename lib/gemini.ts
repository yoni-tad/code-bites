import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateTip(language: string, level: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `Please generate a concise coding tip for a ${language} developer at an ${level} level. The response should be in JSON format only, with no additional text or explanations. The JSON structure should include the following keys: "title," "introduction," "code," and "conclusion." The content for each key should be relevant to the tip.`;

  const result = await model.generateContent(prompt);
  let text = result.response.text();
  text = text.replace(/```json|```/g, "").trim()

  return JSON.parse(text);
}
