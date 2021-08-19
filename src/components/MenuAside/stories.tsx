import { Meta, Story } from '@storybook/react'

import { MenuAside } from '.'

export default {
  title: 'MenuAside',
  component: MenuAside
} as Meta

export const MenuAsideStory: Story = args => <MenuAside {...args} />
