import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is not set');
}

const ai = new GoogleGenAI({ apiKey });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: `Keep the response between 15 to 20 words. ${prompt}`,
    });

    
    res.json({ text: response.text });

  } catch (error: any) {
    console.error('Error generating content:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.message || 'Unknown error'
    });
  }
});

app.post('/api/chat/stream', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash-lite',
      contents: `Keep the response between 15 to 20 words. ${prompt}`,
    });

    for await (const chunk of response) {
      if (chunk.text) {
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();

  } catch (error: any) {
    console.error('Error streaming content:', error);
    res.status(500).json({
      error: 'Failed to stream response',
      details: error.message || 'Unknown error'
    });
  }
});

app.post('/api/chat/search', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const tools = [
      {
        googleSearch: {}
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: `Keep the response between 15 to 20 words. ${prompt}`,
      config: {
        tools,
      }
    });

    res.json({ text: response.text });

  } catch (error: any) {
    console.error('Error with search:', error);
    res.status(500).json({
      error: 'Failed to generate response with search',
      details: error.message || 'Unknown error'
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
