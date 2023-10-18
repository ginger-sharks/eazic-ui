import EazicBar from '../components/EazicBar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Eazic components/Bar',
  component: EazicBar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof EazicBar>

export default meta
type Story = StoryObj<typeof meta>

export const Sandbox: Story = {}
