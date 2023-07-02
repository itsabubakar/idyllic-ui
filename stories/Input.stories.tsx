import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, InputProps } from '../src/Input'

const meta: Meta = {
    title: 'Input',
    component: Input,
}

export default meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

export const Password = Template.bind({})

export const Email = Template.bind({})

export const Error = Template.bind({})


Default.args = {
    placeholder: 'Placeholder',
    label: 'Default'
}

Password.args = {
    placeholder: 'Enter password',
    label: 'Password',
    type: 'password',
    width: 'w-72',
}

Email.args = {
    placeholder: 'Email input',
    label: 'Email',
    type: 'email',
}

Error.args = {
    placeholder: 'Error',
    label: 'Error',
    error: true,
}
