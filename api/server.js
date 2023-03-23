const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
const https = require("https");

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ruta para el endpoint
app.post("/message", async (req, res) => {
  const { message } = req.body;
  const prompt = `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
  Human: ${message}
  AI:`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    const { choices } = response.data?.choices[0];
    const aiResponse = choices[0].text.trim();

    res.json({ message: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
});

const server = https.createServer(options, app);

// iniciar el servidor
server.listen(3000, () => {
  console.log("listening on 3000");
});
