import React from "react";
import { Meta, Story } from "@storybook/react";
import { FormInput, Props } from '../src/FormControl'

const meta: Meta = {
    title: 'FormControl',
    component: FormInput,
}

export default meta

const Template: Story<Props> = (args) => <FormInput {...args} />

export const Default = Template.bind({})

export const Password = Template.bind({})

export const Email = Template.bind({})

export const Error = Template.bind({})

export const Search = Template.bind({})

Default.args = {
    placeholder: 'Placeholder',
    label: 'Default'
}

Password.args = {
    placeholder: 'Enter password',
    label: 'Password',
    type: 'password'
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

Search.args = {
    placeholder: 'Search',
    type: 'search'
}