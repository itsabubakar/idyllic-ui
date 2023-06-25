import React from "react";
import { Meta, Story } from "@storybook/react";
import { TailwindBtn, ButtonProps } from '../src/TailwindBtn'

const meta: Meta = {
    title: 'TailwindBtn',
    component: TailwindBtn,
    argTypes: {
        children: {
            defaultValue: 'Light'
        }
    }
}

export default meta

const Template: Story<ButtonProps> = (args) => <TailwindBtn {...args} />

export const Light = Template.bind({})
export const Dark = Template.bind({})
export const LightOutline = Template.bind({})
export const DarkOutline = Template.bind({})
export const Disabled = Template.bind({})

Dark.args = {
    children: 'Dark',
}

LightOutline.args = {
    children: 'Light Outline',
}

DarkOutline.args = {
    children: 'Dark Outline',
    type: 'dark-outline',
}

Disabled.args = {
    children: 'Disabled',

}