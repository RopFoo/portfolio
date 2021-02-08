import React from "react"
import Carousel from "../../modules/Carousel/Carousel"
import "./Skills.scss"

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section">
      <Carousel navOptions={["dev", "design"]} />
    </div>
  )
}

export default SkillsSection
