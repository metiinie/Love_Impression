import { useEffect, useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [hearts, setHearts] = useState([])
  const [butterflies, setButterflies] = useState([])

  useEffect(() => {
    // Create floating hearts
    const heartInterval = setInterval(() => {
      setHearts(prev => [...prev, { id: Date.now(), left: Math.random() * 100 }])
    }, 2000)

    // Create butterflies
    const butterflyInterval = setInterval(() => {
      setButterflies(prev => [...prev, { 
        id: Date.now(), 
        left: Math.random() * 100,
        delay: Math.random() * 2
      }])
    }, 3000)

    return () => {
      clearInterval(heartInterval)
      clearInterval(butterflyInterval)
    }
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          to my dear 
          Hikma  <span className="heart-icon">❤️</span>
        </h1>
        <h3 className="hero-title">My Princess <span className="heart-icon">👸</span>
        </h3>
        <p className="hero-subtitle">
          In a world of billions, you found a way to make everything feel like it was meant to be
        </p>
      </div>

      {/* Floating Hearts */}
      {hearts.map(heart => (
        <div 
          key={heart.id} 
          className="floating-heart"
          style={{ left: `${heart.left}%` }}
        >
          ❤️
        </div>
      ))}

      {/* Butterflies */}
      {butterflies.map(butterfly => (
        <div 
          key={butterfly.id} 
          className="butterfly"
          style={{ 
            left: `${butterfly.left}%`,
            animationDelay: `${butterfly.delay}s`
          }}
        >
          🦋
        </div>
      ))}
    </section>
  )
}

export default HeroSection

