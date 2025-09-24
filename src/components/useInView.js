import { useEffect, useRef, useState } from "react"

export function useInView(options = { threshold: 0.15, rootMargin: "0px" }) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}


