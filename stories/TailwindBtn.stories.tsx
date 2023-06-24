import React from "react";
import { Meta, Story } from "@storybook/react";
import { TailwindBtn, ButtonProps } from '../src/TailwindBtn'

const meta: Meta = {
    title: 'TailwindBtn',
    component: TailwindBtn,
    argTypes: {
        children: {
            defaultValue: 'Default'
        }
    }
}

export default meta

const Template: Story<ButtonProps> = (args) => <TailwindBtn {...args} />

export const Default = Template.bind({})

