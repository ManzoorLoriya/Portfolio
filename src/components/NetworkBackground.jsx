import React, { useEffect, useRef } from "react"

function getPrefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export default function NetworkBackground({ density = 0.00012, maxDistance = 120, speed = 0.3 }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    const resize = () => {
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1))
      const { innerWidth: w, innerHeight: h } = window
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(24, Math.floor(w * h * density))
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }))
    }

    const step = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      const particles = particlesRef.current

      // update
      for (let p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < maxDistance * maxDistance) {
            const alpha = 1 - Math.sqrt(d2) / maxDistance
            ctx.strokeStyle = `rgba(6,182,212,${alpha * 0.6})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // draw nodes
      for (let p of particles) {
        ctx.fillStyle = "rgba(16,185,129,0.8)" // emerald nodes
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(step)
    }

    const start = () => {
      cancelAnimationFrame(rafRef.current)
      resize()
      if (!reducedMotionRef.current) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        // Render a static frame
        step()
        cancelAnimationFrame(rafRef.current)
      }
    }

    reducedMotionRef.current = getPrefersReducedMotion()
    start()
    window.addEventListener("resize", start)
    return () => {
      window.removeEventListener("resize", start)
      cancelAnimationFrame(rafRef.current)
    }
  }, [density, maxDistance, speed])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
      aria-hidden="true"
    />
  )
}


