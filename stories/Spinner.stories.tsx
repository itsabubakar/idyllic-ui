import React from "react";
import { Meta, Story } from "@storybook/react";
import { Spinner, SpinnerProps } from '../src/Spinner'

const meta: Meta = {
    title: 'Loaders',
    component: Spinner,
}

export default meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Default = Template.bind({})

