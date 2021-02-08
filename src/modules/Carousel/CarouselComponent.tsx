import React, { useEffect, useState } from "react"

interface CarouselComponentProps {
  active: boolean
  moveLeft: boolean
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  active,
  moveLeft,
  children,
}) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (!active) {
      setTimeout(() => {
        setDisplay(false)
      }, 100)
    } else {
      setDisplay(true)
    }
  }, [active])

  return (
    <>
      {display && (
        <div
          className={`carousel__content ${
            !moveLeft
              ? "carousel__content__start-left"
              : "carousel__content__start-right"
          } ${
            active
              ? ""
              : `${
                  moveLeft
                    ? "carousel__content__move-left"
                    : "carousel__content__move-right"
                }`
          }
            `}
        >
          {children}
        </div>
      )}
    </>
  )
}

export default CarouselComponent
