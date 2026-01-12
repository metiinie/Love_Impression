import { useEffect, useState } from 'react'
import './PointerAnimation.css'

const PointerAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      className={`custom-pointer ${isVisible ? 'visible' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div className="pointer-dot"></div>
      <div className="pointer-ring"></div>
      <div className="pointer-ring ring-2"></div>
      <div className="pointer-ring ring-3"></div>
    </div>
  )
}

export default PointerAnimation

