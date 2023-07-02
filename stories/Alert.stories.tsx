import React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert, Alertprops } from '../src/Alert'

const meta: Meta = {
    title: 'Alert',
    component: Alert,
}

export default meta

const Template: Story<Alertprops> = (args) => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {
    children: 'God abeg',
    type: 'success'
}

