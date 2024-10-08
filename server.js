// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

const OPENAI_API_KEY = 'your-openai-api-key-here';

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // Use the desired model here
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({
      reply: response.data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).send('Error in chatbot communication');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
