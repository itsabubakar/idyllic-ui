import React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert, AlertProp } from '../src/Alert'

const meta: Meta = {
    title: 'Alert',
    component: Alert,
}

export default meta

const Template: Story<AlertProp> = (args) => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Headache',
    children: 'God abeg'
}

