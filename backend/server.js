const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/api/analyze-sentiment', async (req, res) => {
  try {
    const { text } = req.body;

    const openAIAPI = axios.create({
      baseURL: 'https://api.openai.com/v1/engines/davinci-codex/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
    });

    const prompt = `Analyze the sentiment of the following text: "${text}".`;
    const maxTokens = 50;

    const { data } = await openAIAPI.post('', { prompt, max_tokens: maxTokens });

    const sentiment = data.choices[0].text.trim();
    res.json({ sentiment });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});