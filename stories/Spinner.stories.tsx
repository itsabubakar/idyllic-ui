import React from "react";
import { Meta, Story } from "@storybook/react";
import { Spinner, Spinnerprops } from '../src/Spinner'

const meta: Meta = {
    title: 'Spinners',
    component: Spinner,
}

export default meta

const Template: Story<Spinnerprops> = (args) => <Spinner {...args} />

export const Default = Template.bind({})

