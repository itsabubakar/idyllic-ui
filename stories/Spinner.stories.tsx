import React from "react";
import { Meta, Story } from "@storybook/react";
import { Spinner } from '../src/Spinner'

const meta: Meta = {
    title: 'Spinners',
    component: Spinner,
}

export default meta

const Template: Story = (args) => <Spinner {...args} />

export const Default = Template.bind({})

