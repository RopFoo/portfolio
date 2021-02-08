import React from "react"
import { Story, Meta } from "@storybook/react"
import { Carousel, CarouselProps } from "./Carousel"

export default {
  title: "Carousel",
  componen: Carousel,
} as Meta

const Template: Story<CarouselProps> = (args: any) => (
  <Carousel navOptions={args.navOptions} />
)

export const Primary = Template.bind({})
Primary.args = {
  navOptions: ["dev", "design"],
}
