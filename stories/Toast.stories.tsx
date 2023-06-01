import React from "react";
import { Meta, Story } from "@storybook/react";
import { Toast, ToastProp } from '../src/Toast'

const meta: Meta = {
    title: 'Toast',
    component: Toast,
}

export default meta

const Template: Story<ToastProp> = (args) => <Toast {...args} />

export const Default = Template.bind({})

Default.args = {

}

