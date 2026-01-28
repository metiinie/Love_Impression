import { useState } from 'react'
import './ProposalSection.css'

const ProposalSection = () => {
  const [celebrating, setCelebrating] = useState(false)
  const [particles, setParticles] = useState([])

  const createCelebration = () => {
    setCelebrating(true)
    
    // Create confetti particles
    const newParticles = []
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: -10,
        delay: Math.random() * 2,
        emoji: ['❤️', '🦋', '✨', '🌸', '💖', '🎉'][Math.floor(Math.random() * 6)],
        speed: Math.random() * 3 + 2
      })
    }
    setParticles(newParticles)

    // Create floating hearts
    const heartInterval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const heart = document.createElement('div')
          heart.className = 'celebration-heart'
          heart.style.left = Math.random() * 100 + '%'
          heart.style.bottom = '-50px'
          heart.textContent = '❤️'
          document.body.appendChild(heart)
          
          setTimeout(() => heart.remove(), 3000)
        }, i * 100)
      }
    }, 500)

    setTimeout(() => clearInterval(heartInterval), 10000)
  }

  return (
    <section className="proposal-section">
      <div className="proposal-content">
        <h2 className="proposal-title">
          my Princess 👸,
        </h2>
        <h3 className="proposal-question">
          will you be my forever?
        </h3>
        
        <div className="proposal-buttons">
          <button 
            className="proposal-btn yes-btn"
            onClick={createCelebration}
          >
            Yes 💖
          </button>
          <button 
            className="proposal-btn of-course-btn"
            onClick={createCelebration}
          >
            Of course 😘
          </button>
        </div>
      </div>

      {celebrating && (
        <div className="celebration-overlay">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="confetti-particle"
              style={{
                left: `${particle.x}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.speed}s`
              }}
            >
              {particle.emoji}
            </div>
          ))}
          <div className="celebration-message">
            <h2>YES! 🎉</h2>
            <p>Imani, you've made me the happiest person in the world! ❤️</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProposalSection

