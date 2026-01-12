import { useEffect } from 'react'
import './CursorTrail.css'

const CursorTrail = () => {
  useEffect(() => {
    let hearts = []

    const createHeart = (x, y) => {
      const heart = document.createElement('div')
      heart.className = 'cursor-heart'
      heart.style.left = x + 'px'
      heart.style.top = y + 'px'
      heart.textContent = '❤️'
      document.body.appendChild(heart)
      hearts.push(heart)

      setTimeout(() => {
        heart.style.opacity = '0'
        heart.style.transform = 'translate(-50%, -50%) scale(0)'
        setTimeout(() => {
          if (heart.parentNode) {
            heart.parentNode.removeChild(heart)
          }
          hearts = hearts.filter(h => h !== heart)
        }, 300)
      }, 500)
    }

    const handleMouseMove = (e) => {
      if (Math.random() > 0.85) {
        createHeart(e.clientX, e.clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      hearts.forEach(heart => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart)
        }
      })
    }
  }, [])

  return null
}

export default CursorTrail

