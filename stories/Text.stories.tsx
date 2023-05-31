import React from "react";
import { Meta, Story } from "@storybook/react";
import { Text, TextProps } from '../src/Text'

const meta: Meta = {
    title: 'Text',
    component: Text,
}

export default meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
    children: 'lorem lorem ipsum ipsum',
    as: 'underline',
    size: '20px',
    color: '#2e2e2e'
}

