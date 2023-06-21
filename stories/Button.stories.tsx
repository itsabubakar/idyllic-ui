import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from '../src/Button'

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

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Secondary = Template.bind({})

export const Disabled = Template.bind({})

export const Loading = Template.bind({})



Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button',
    size: 'sm',
}

Loading.args = {
    variant: 'secondary',
    children: 'Loading Button',
    size: 'md',
    loading: true
}

Disabled.args = {
    children: 'Disabled Button',
    disabled: true
}