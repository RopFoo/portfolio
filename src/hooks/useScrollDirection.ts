import { useEffect, useState } from "react"

let scrollPos = 0

export function useScrollDirection() {
  const [isScrollUp, setIsScrollUp] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", detectScroll)
    return () => window.removeEventListener("scroll", detectScroll)
  }, [])

  function detectScroll() {
    const topRect = document.body.getBoundingClientRect().top
    setIsScrollUp(topRect > scrollPos)
    scrollPos = topRect
  }

  return {
    isScrollUp,
  }
}
