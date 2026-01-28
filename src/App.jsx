import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import LoveAnimationSection from './components/LoveAnimationSection'
import MemorySection from './components/MemorySection'
import ProposalSection from './components/ProposalSection'
import VideoSection from './components/VideoSection'
import CursorTrail from './components/CursorTrail'
import PointerAnimation from './components/PointerAnimation'
import './App.css'

function App() {
  useEffect(() => {
    // Add sparkle particles to background
    const createSparkle = () => {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = Math.random() * 100 + '%'
      sparkle.style.top = Math.random() * 100 + '%'
      sparkle.style.animationDelay = Math.random() * 2 + 's'
      document.body.appendChild(sparkle)
      
      setTimeout(() => {
        sparkle.remove()
      }, 3000)
    }

    const sparkleInterval = setInterval(createSparkle, 500)
    return () => clearInterval(sparkleInterval)
  }, [])

  return (
    <div className="app">
      <PointerAnimation />
      <CursorTrail />
      <HeroSection />
      <StorySection />
      <LoveAnimationSection />
      <VideoSection />
      <MemorySection />
      <ProposalSection />
    </div>
  )
}

export default App

