import { useEffect, useRef, useState } from 'react'
import './MemorySection.css'

const MemorySection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="memory-section">
      <div className="memory-container">
        {/* Beautiful Flower Decoration */}
        <div className="flower-decoration">
          <div className="flower">🌸</div>
          <div className="flower">🌺</div>
          <div className="flower">🌷</div>
          <div className="flower">🌹</div>
          <div className="flower">🌻</div>
        </div>

        {/* Our Photo Section */}
        <div className={`photo-section reveal ${isVisible ? 'active' : ''}`}>
          {/* Green Butterfly Background */}
          <div className="butterfly-bg">
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
            <span className="butterfly-emoji">🦋</span>
          </div>
          
          <h2 className="section-title">Our Moments Together</h2>
          <div className="photos-grid">
            <div className="photo-card">
              <div className="photo-placeholder">
                <div className="photo-icon">📸</div>
                <p className="photo-text">Photo 1</p>
                <p className="photo-hint">Add your image</p>
              </div>
              {/* To add your photo, replace the photo-placeholder div above with:
                  <img src="/path/to/your/photo1.jpg" alt="Hikma and I" className="our-photo" />
              */}
            </div>
            <div className="photo-card">
              <div className="photo-placeholder">
                <div className="photo-icon">📸</div>
                <p className="photo-text">Photo 2</p>
                <p className="photo-hint">Add your image</p>
              </div>
              {/* To add your photo, replace the photo-placeholder div above with:
                  <img src="/path/to/your/photo2.jpg" alt="Hikma and I" className="our-photo" />
              */}
            </div>
            <div className="photo-card">
              <div className="photo-placeholder">
                <div className="photo-icon">📸</div>
                <p className="photo-text">Photo 3</p>
                <p className="photo-hint">Add your image</p>
              </div>
              {/* To add your photo, replace the photo-placeholder div above with:
                  <img src="/path/to/your/photo3.jpg" alt="Hikma and I" className="our-photo" />
              */}
            </div>
          </div>
        </div>

        {/* My Dream With Her Section */}
        <div className={`dream-section reveal ${isVisible ? 'active' : ''}`}>
          {/* Ring Emoji Background */}
          <div className="ring-bg">
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
            <span className="ring-emoji">💍</span>
          </div>
          
          <h2 className="section-title">My Dream With You</h2>
          <div className="dream-card">
            <div className="dream-icon">💭</div>
            <p className="dream-text">
              I dream of waking up next to you every morning, seeing your smile before anything else. 
              I dream of building a life together—filled with laughter, adventures, and quiet moments 
              that become our favorite memories.
            </p>
            <p className="dream-text">
              I dream of growing old with you, of holding your hand through every season of life. 
              I dream of creating a home where love lives in every corner, where we can be ourselves 
              completely, where every day feels like a gift because you're in it.
            </p>
            <p className="dream-text">
              Most of all, I dream of making you happy, of being the person who makes your heart feel 
              safe, of being your partner in every adventure, big or small. I dream of us—together, 
              always.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemorySection

