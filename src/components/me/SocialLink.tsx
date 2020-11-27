import React from "react"
import { Link } from "gatsby"

interface Props {
  img: any
  name: string
  link: string
}

const SocialLink: React.FC<Props> = ({ img, name, link }) => {
  return (
    <Link to={link}>
      <div className="me-section__info__links-section__link">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default SocialLink
