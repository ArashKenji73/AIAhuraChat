import { ref } from 'vue'
const MOCK_ENDPOINT = 'https://mocki.io/v1/chat/completions'
const STORAGE_KEY = 'chat_messages'
export default function useChatApi() {
  // --- Load from localStorage ---
const saved = localStorage.getItem(STORAGE_KEY)
const messages = ref(saved ? JSON.parse(saved) : [])
const isTyping = ref(false)
const status = ref('آماده')

async function handleSend(content) {
const userMsg = { id: Date.now(), role: 'user', content, time: Date.now() }
messages.value.push(userMsg)
isTyping.value = true
status.value = 'در حال پاسخگویی...'

try {
const res = await fetch(MOCK_ENDPOINT, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ messages: messages.value })
})

const data = await res.json()
const text = data?.choices?.[0]?.message?.content || 'پاسخی دریافت نشد.'

messages.value.push({ id: Date.now() + 1, role: 'assistant', content: text, time: Date.now() })
} catch {
messages.value.push({ id: Date.now() + 2, role: 'assistant', content: 'خطا در اتصال', time: Date.now() })
} finally {
isTyping.value = false
status.value = 'آماده'
}
}

function clearChat() {
messages.value = []
}

return { messages, isTyping, status, handleSend, clearChat }
}