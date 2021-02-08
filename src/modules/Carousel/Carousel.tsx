import React, { useEffect, useState } from "react"
import {
  skillIconsDesign,
  skillIconsDev,
} from "../../components/skills/skillIcons"
import { CarouselController } from "./CarouselController/CarouselController"
import "./Carousel.scss"
import "../../components/skills/Skills.scss"
import CarouselComponent from "./CarouselComponent"

export interface CarouselProps {
  navOptions: string[]
}

export const Carousel: React.FC<CarouselProps> = ({
  navOptions = ["dev", "design", "test"],
}) => {
  const [activeIndex, setActiveIndex] = useState([0])
  const [currentOption, setCurrentOption] = useState(
    navOptions[activeIndex[activeIndex.length - 1]]
  )

  const isLeft = (): boolean =>
    activeIndex[activeIndex.length - 1] < activeIndex[activeIndex.length - 2]

  return (
    <div className="carousel">
      <div className="skills-section__header">
        <h1>/skills</h1>

        <CarouselController
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          navOptions={navOptions}
          setCurrentOption={setCurrentOption}
        />
      </div>
      <div className="carousel__list ">
        <CarouselComponent
          active={currentOption === navOptions[0]}
          moveLeft={isLeft()}
        >
          <div className="skills-section__grid">
            {skillIconsDev.map(({ name, icon, alt }) => {
              return (
                <div className="skills-section__element" key={name}>
                  <img src={icon} alt={alt} />
                  <p>{name}</p>
                </div>
              )
            })}
          </div>
        </CarouselComponent>
        <CarouselComponent
          active={currentOption === navOptions[1]}
          moveLeft={isLeft()}
        >
          <div className="skills-section__grid">
            {skillIconsDesign.map(({ name, icon, alt }) => {
              return (
                <div className="skills-section__element" key={name}>
                  <img src={icon} alt={alt} />
                  <p>{name}</p>
                </div>
              )
            })}
          </div>
        </CarouselComponent>
      </div>
    </div>
  )
}

export default Carousel
