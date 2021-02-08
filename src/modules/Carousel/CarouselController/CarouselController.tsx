import React from "react"
import "./CarouselController.scss"

export interface CarouselControllerProps {
  navOptions: string[]
  activeIndex: number[]
  setCurrentOption: React.Dispatch<React.SetStateAction<string>>
  setActiveIndex: React.Dispatch<React.SetStateAction<number[]>>
}

export const CarouselController: React.FC<CarouselControllerProps> = ({
  navOptions,
  activeIndex,
  setCurrentOption,
  setActiveIndex,
}) => {
  return (
    <div className="controller">
      {navOptions.map((navOption, index: number) => {
        return (
          <a
            className={`controller__element ${
              activeIndex[activeIndex.length - 1] === index
                ? "controller__element__active"
                : ""
            }`}
            onClick={() => {
              if (activeIndex[activeIndex.length - 1] !== index)
                setActiveIndex([...activeIndex, index])
              setCurrentOption(navOption)
            }}
            key={index}
          >
            {navOption}
          </a>
        )
      })}
    </div>
  )
}
