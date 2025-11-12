import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import introAnimation from '../public/lottie_intro.json'
import Home from './pages/Home'
import AIChat from './pages/AIChat'
import ScreenStub from './pages/ScreenStub'
import screens from './data/screens'

function App() {
  return (
    <div className="app-root">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="logo">HealthMate AI</Link>
        </div>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/ai-chat">AI Chat</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<SplashWrapper><Home /></SplashWrapper>} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/login" element={<ScreenStub id={2} title={'Login'} />} />
        <Route path="/signup" element={<ScreenStub id={3} title={'Signup'} />} />

        {screens.map((s) => (
          <Route key={s.id} path={s.path} element={<ScreenStub id={s.id} title={s.title} />} />
        ))}

        <Route path="*" element={<ScreenStub id={999} title="Not Found" />} />
      </Routes>

      <footer className="footer">© {new Date().getFullYear()} HealthMate AI — Demo</footer>
    </div>
  )
}

function SplashWrapper({ children }) {
  const [showIntro, setShowIntro] = React.useState(true)
  React.useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 5000)
    return () => clearTimeout(t)
  }, [])

  if (showIntro) {
    return (
      <div className="splash">
        <div className="lottie-box">
          <Lottie animationData={introAnimation} loop={false} />
        </div>
        <h3 className="tag">HealthMate AI — Your Gujarati Smart Health Partner</h3>
      </div>
    )
  }

  return children
}

export default App
