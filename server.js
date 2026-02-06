const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Build messages array with conversation history
    const messages = [
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are a helpful cooking assistant on a recipe website. You can:
- Answer cooking and baking questions
- Suggest recipes based on ingredients users have
- Provide ingredient substitutions
- Explain cooking techniques
- Offer tips for meal planning and prep
- Help with dietary restrictions and modifications

Be friendly, concise, and helpful. If asked about specific recipes on the site, you can reference common dishes. Format responses nicely with bullet points or numbered lists when appropriate.`,
      messages: messages,
    });

    res.json({
      response: response.content[0].text,
      conversationHistory: messages
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Recipe website running on port ${PORT}`);
});
