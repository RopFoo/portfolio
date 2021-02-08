import React from "react"
import { Story, Meta } from "@storybook/react"
import { Carousel, CarouselProps } from "./Carousel"

export default {
  title: "Carousel",
  componen: Carousel,
} as Meta

const Template: Story<CarouselProps> = (args: any) => <Carousel />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Button",
}
