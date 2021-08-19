import { Meta, Story } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const MainStory: Story = args => <Main {...args} />
