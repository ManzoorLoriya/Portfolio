import { useCallback, useState } from "react"

export function useMouseParallax(strength = 12) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback((event) => {
    const { innerWidth, innerHeight } = window
    const normalizedX = (event.clientX - innerWidth / 2) / (innerWidth / 2)
    const normalizedY = (event.clientY - innerHeight / 2) / (innerHeight / 2)
    setOffset({ x: normalizedX * strength, y: normalizedY * strength })
  }, [strength])

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
  }

  return { onMouseMove, style }
}


