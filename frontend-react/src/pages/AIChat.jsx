import React from 'react'
import { getAIReply } from '../services/aiApi'
import { saveMessage } from '../services/chatService'
import { auth } from '../services/firebase'

const sampleReplies = [{ from: 'ai', text: 'Hello! How can I help you today?' }]

export default function AIChat() {
  const [messages, setMessages] = React.useState(sampleReplies)
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  async function send(){
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    const uid = auth?.currentUser?.uid || 'anon'
    saveMessage(uid, 'user', input)
    const textToSend = input
    setInput('')
    setLoading(true)
    try {
      const reply = await getAIReply(textToSend)
      setMessages(prev => [...prev, { from: 'ai', text: reply }])
      saveMessage(uid, 'ai', reply)
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { from: 'ai', text: 'AI service error. Try later.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page container">
      <h1>AI Chat</h1>
      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.from}`}>
            <div className="bubble-text">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
        <button onClick={send} disabled={loading}>{loading ? '...' : 'Send'}</button>
      </div>
      <p className="note">This chat saves messages to Firestore and requests a deployed AI backend.</p>
    </div>
  )
}
