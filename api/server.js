const express = require("express");
const app = express();
const axios = require("axios");

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
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt,
        max_tokens: 150,
        n: 1,
        stop: "\n",
        temperature: 0.7,
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

// iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
