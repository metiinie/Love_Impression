import { useEffect, useRef } from 'react'
import './StorySection.css'

const StorySection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="story-section reveal">
      {/* Cute Emoji Background */}
      <div className="cute-emoji-bg">
        <span className="bg-emoji">🥰</span>
        <span className="bg-emoji">😊</span>
        <span className="bg-emoji">💕</span>
        <span className="bg-emoji">😍</span>
        <span className="bg-emoji">💖</span>
        <span className="bg-emoji">🥺</span>
        <span className="bg-emoji">💝</span>
        <span className="bg-emoji">😘</span>
        <span className="bg-emoji">💗</span>
        <span className="bg-emoji">🥰</span>
        <span className="bg-emoji">💞</span>
        <span className="bg-emoji">😊</span>
        <span className="bg-emoji">💕</span>
        <span className="bg-emoji">😍</span>
        <span className="bg-emoji">💖</span>
        <span className="bg-emoji">🥺</span>
        <span className="bg-emoji">💝</span>
        <span className="bg-emoji">😘</span>
        <span className="bg-emoji">💗</span>
        <span className="bg-emoji">🥰</span>
      </div>
      
      <div className="story-container">
        <h2 className="story-title">Our Story</h2>
        
        <div className="story-card">
          <div className="story-icon">💫</div>
          <h3 className="story-heading">When I See Imani</h3>
          <p className="story-text">
            I didn't know that a single moment could change everything. But then Imani walked into my life, 
            and suddenly, all the pieces I didn't even know were missing started falling into place. 
            It wasn't about finding someone perfect—it was about finding someone who made everything feel right.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StorySection

