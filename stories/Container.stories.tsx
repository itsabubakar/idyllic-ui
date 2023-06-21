import React from "react";
import { Meta, Story } from "@storybook/react";
import { Container, ContainerProps } from '../src/Container'

const meta: Meta = {
    title: 'Container',
    component: Container,

}

export default meta

const Template: Story<ContainerProps> = (args) => <Container {...args} />

export const Default = Template.bind({})





Default.args = {
    children: 'lorem ipsum lorem',
}

