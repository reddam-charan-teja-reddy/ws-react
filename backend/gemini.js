const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey:
    process.env.GOOGLE_API_KEY || "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38",
});

async function generateProductDescription() {
  try {
    const prompt = "Hello, how can I help you today?";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log("Generated description:", response.text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

async function main() {
  await generateProductDescription();
}

main();

module.exports = { ai, generateProductDescription };
