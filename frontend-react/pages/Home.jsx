import React from 'react'
import { Link } from 'react-router-dom'
import screens from '../data/screens'
export default function Home() {
  return (
    <div className="page container">
      <h1>HealthMate AI — Demo Home</h1>
      <p>Preview of the full 50-screen application. Click any card to open that screen preview.</p>
      <div className="cards-grid">
        {screens.slice(0, 15).map(s => (
          <Link to={s.path} className="card" key={s.id}>
            <h3>{s.id}. {s.title}</h3>
            <p>Tap to preview</p>
          </Link>
        ))}
      </div>
      <h2>All Screens</h2>
      <div className="all-list">
        {screens.map(s => (
          <Link to={s.path} key={s.id} className="list-item">{s.id}. {s.title}</Link>
        ))}
      </div>
    </div>
  )
}
