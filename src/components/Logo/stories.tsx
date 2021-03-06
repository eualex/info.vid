import { Meta, Story } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const LogoStory: Story = args => <Logo {...args} />
