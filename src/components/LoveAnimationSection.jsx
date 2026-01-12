import { useState, useEffect } from 'react'
import './LoveAnimationSection.css'

const LoveAnimationSection = () => {
  const [particles, setParticles] = useState([])

  const createParticle = (x, y) => {
    const emojis = ['❤️', '🦋', '✨', '🌸']
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]
    
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      emoji,
      size: Math.random() * 20 + 15
    }
  }

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Create multiple particles on click
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setParticles(prev => [...prev, createParticle(x, y)])
      }, i * 50)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 2000))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="love-animation-section" onClick={handleClick}>
      <div className="love-content">
        <div className="beating-heart">❤️</div>
        <p className="love-message">Click anywhere to spread love</p>
      </div>

      {particles.map(particle => (
        <div
          key={particle.id}
          className="floating-emoji"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </section>
  )
}

export default LoveAnimationSection

