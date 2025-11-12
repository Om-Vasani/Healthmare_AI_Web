import React from 'react'
import screens from '../data/screens'
export default function ScreenStub({ id, title }) {
  const screen = screens.find(s => s.id === id)
  const t = title || (screen && screen.title) || 'Screen'
  return (
    <div className="page container">
      <h1>{t}</h1>
      <p>This is a preview stub for the <strong>{t}</strong> screen. Use this to verify layout & flow.</p>
      <div className="stub-grid">
        <div className="card">Example content area</div>
        <div className="card">Example chart / list</div>
        <div className="card">Buttons / Actions</div>
      </div>
      <div className="nav-links">
        <a href="/">← Back to Home</a>
      </div>
    </div>
  )
}
