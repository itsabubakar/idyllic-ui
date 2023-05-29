import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from '../src/Button'

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Default'
        }
    }
}

export default meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Secondary = Template.bind({})

export const Disabled = Template.bind({})



Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button',
    size: '24px',
}

Disabled.args = {
    children: 'Disabled Button',
    disabled: true
}