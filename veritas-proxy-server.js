
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your actual OpenAI API key
const OPENAI_API_KEY = "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";

app.post("/proxy", async (req, res) => {
  const { input, tool } = req.body;

  const messages = [
    { role: "system", content: "You are Veritas, an elite legal AI strategist. Always respond with court-appropriate formatting and strategic legal reasoning. If generating a document, use 12pt Times New Roman, double spacing, and clear structure." },
    { role: "user", content: input }
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages
      })
    });

    const data = await response.json();
    res.json({ reply: data.choices?.[0]?.message?.content || "No response." });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "Failed to connect to OpenAI." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Veritas proxy running on http://localhost:${PORT}`);
});
