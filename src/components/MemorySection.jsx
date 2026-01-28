import { useEffect, useRef, useState } from 'react'
import './MemorySection.css'
import CafeImage from './Images/cafe-1.png'
import VacationImage from './Images/vacation-1.png'
import FaceFaceImage from './Images/face-face.png'


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
          
          <h2 className="section-title">Our Precious Moments with Imani</h2>
          <div className="photos-grid">
            <div className="photo-card">
              <img src={FaceFaceImage} alt="Our beautiful moment with Imani" className="our-photo" />
            </div>
            <div className="photo-card">
              <img src={CafeImage} alt="Our cafe moment with Imani" className="our-photo" />
            </div>
            <div className="photo-card">
              <img src={VacationImage} alt="Our vacation moment with Imani" className="our-photo" />
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
          
          <h2 className="section-title">My Dream With Imani</h2>
          <div className="dream-card">
            <div className="dream-icon">💭</div>
            <p className="dream-text">
              I dream of waking up next to Imani every morning, seeing her smile before anything else. 
              I dream of building a life with Imani—filled with laughter, adventures, and quiet moments 
              that become our favorite memories.
            </p>
            <p className="dream-text">
              I dream of growing old with Imani, of holding her hand through every season of life. 
              I dream of creating a home where love lives in every corner, where we can be ourselves 
              completely, where every day feels like a gift because she's in it.
            </p>
            <p className="dream-text">
              Most of all, I dream of making Imani happy, of being the person who makes her heart feel 
              safe, of being her partner in every adventure, big or small. I dream of us—together, 
              always.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemorySection

