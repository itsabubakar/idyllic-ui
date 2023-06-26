import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from '../src/Button'

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Light'
        }
    }
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Light = Template.bind({})
export const Dark = Template.bind({})
export const LightOutline = Template.bind({})
export const DarkOutline = Template.bind({})
export const Disabled = Template.bind({})

Dark.args = {
    children: 'Dark',
    type: 'dark'
}

LightOutline.args = {
    children: 'Light Outline',
    type: 'light-outline',
}

DarkOutline.args = {
    children: 'Dark Outline',
    type: 'dark-outline',
}

Disabled.args = {
    children: 'Disabled',
    disabled: true,
}