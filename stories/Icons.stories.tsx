import React from "react";
import { Meta, Story } from "@storybook/react";
import { Avatar, Menu, Close, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Iconprops } from '../src/Icons'

const meta: Meta = {
    title: 'Avatar',
    component: Avatar,
}

export default meta

const Template: Story<Iconprops> = (args) => <Avatar {...args} />

const MenuTemplate: Story<Iconprops> = (args) => <Menu {...args} />

const CloseTemplate: Story<Iconprops> = (args) => <Close {...args} />

const ArrowLeftTemplate: Story<Iconprops> = (args) => <ArrowLeft {...args} />

const ArrowRightTemplate: Story<Iconprops> = (args) => <ArrowRight {...args} />

const ArrowUpTemplate: Story<Iconprops> = (args) => <ArrowUp {...args} />

const ArrowDownTemplate: Story<Iconprops> = (args) => <ArrowDown {...args} />


export const AvatarIcon = Template.bind({})
export const MenuIcon = MenuTemplate.bind({})
export const CloseIcon = CloseTemplate.bind({})
export const ArrowLeftIcon = ArrowLeftTemplate.bind({})
export const ArrowRightIcon = ArrowRightTemplate.bind({})
export const ArrowUpIcon = ArrowUpTemplate.bind({})
export const ArrowDownIcon = ArrowDownTemplate.bind({})

