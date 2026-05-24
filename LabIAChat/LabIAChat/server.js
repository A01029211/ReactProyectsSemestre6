import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: `
Eres un asistente experto en cocina.

Ayuda al usuario a preparar recetas.
Da instrucciones paso a paso.
Habla claro y amigable.

Usuario: ${message}
      `,
    });

    // IMPORTANTE PARA STREAMING
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of responseStream) {
      const text = chunk.text;

      if (text) {
        res.write(text);
      }
    }

    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generando respuesta");
  }
});

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});