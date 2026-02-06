// Chatbot functionality for AI Chef Assistant
let conversationHistory = [];
let isChatbotOpen = false;

function toggleChatbot() {
  const container = document.getElementById('chatbot-container');
  const toggle = document.getElementById('chatbot-toggle');

  isChatbotOpen = !isChatbotOpen;

  if (isChatbotOpen) {
    container.classList.add('active');
    toggle.style.display = 'none';
    document.getElementById('chat-input').focus();
  } else {
    container.classList.remove('active');
    toggle.style.display = 'flex';
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();

  if (!message) return;

  // Clear input
  input.value = '';

  // Add user message to chat
  addMessageToChat(message, 'user');

  // Show typing indicator
  showTypingIndicator();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        conversationHistory: conversationHistory
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();

    // Remove typing indicator
    removeTypingIndicator();

    // Add bot response to chat
    addMessageToChat(data.response, 'bot');

    // Update conversation history
    conversationHistory = data.conversationHistory;
    conversationHistory.push({ role: 'assistant', content: data.response });

  } catch (error) {
    console.error('Chat error:', error);
    removeTypingIndicator();
    addMessageToChat('Sorry, I\'m having trouble connecting right now. Please try again in a moment.', 'bot');
  }
}

function addMessageToChat(message, sender) {
  const messagesContainer = document.getElementById('chatbot-messages');

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;

  const messageP = document.createElement('p');
  messageP.innerHTML = formatMessage(message);

  messageDiv.appendChild(messageP);
  messagesContainer.appendChild(messageDiv);

  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function formatMessage(message) {
  // Convert markdown-like formatting to HTML

  // Convert bullet points
  message = message.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>');
  message = message.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Convert numbered lists
  message = message.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Convert bold
  message = message.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert line breaks
  message = message.replace(/\n\n/g, '</p><p>');
  message = message.replace(/\n/g, '<br>');

  return message;
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chatbot-messages');

  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message';
  typingDiv.id = 'typing-indicator';

  typingDiv.innerHTML = `
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Disable send button while waiting for response
function setInputState(disabled) {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');

  input.disabled = disabled;
  sendBtn.disabled = disabled;
}
