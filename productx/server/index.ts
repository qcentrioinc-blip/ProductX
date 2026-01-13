import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config(); // works locally, env vars come from cPanel in prod

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey });

const app = express();

const PORT = Number(process.env.PORT);

app.use(cors({
  origin: "https://qnestglobal.com",
  methods: ["GET", "POST"],
}));

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend server is running 🚀");
});

/* ---------------- CHAT ---------------- */
app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: `Keep the response between 15 to 20 words. ${prompt}`,
    });

    res.json({ text: response.text });

  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

/* ---------------- STREAM ---------------- */
app.post("/api/chat/stream", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders(); // 🔥 REQUIRED for Passenger

    const stream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash-lite",
      contents: `Keep the response between 15 to 20 words. ${prompt}`,
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();

  } catch (error: any) {
    console.error("Stream error:", error);
    res.end();
  }
});

/* ---------------- SEARCH ---------------- */
app.post("/api/chat/search", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: `Keep the response between 15 to 20 words. ${prompt}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    res.json({ text: response.text });

  } catch (error: any) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Search failed" });
  }
});

app.listen(PORT, () => {
  console.log("Server started on Passenger port");
});
