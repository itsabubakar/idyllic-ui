import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, HeadingProps } from '../src/Header'

const meta: Meta = {
    title: 'Headings',
    component: Header,
}

export default meta

const Template: Story<HeadingProps> = (args) => <Header {...args} />

export const H1 = Template.bind({})

export const H2 = Template.bind({})

export const H3 = Template.bind({})

H1.args = {
    as: 'h1',
    children: 'H1 Tag'
}

H2.args = {
    as: 'h2',
    children: 'H1 Tag'
}
H3.args = {
    as: 'h3',
    children: 'H1 Tag'
}
