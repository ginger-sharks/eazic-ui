import EazicMenu from '../components/EazicMenu.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Eazic components/Menu',
  component: EazicMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onLogin: { action: 'login' },
    onLogout: { action: 'logout' },
    onOpenSettings: { action: 'open-settings' },
    onSignup: { action: 'signup' },
    onToggleMenu: {
      action: 'toggle-menu',
      type: 'function'
    }
  }
} satisfies Meta<typeof EazicMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Sandbox = {
  args: {
    isAuthenticated: false,
    user: {
      name: 'JeanSaigne',
      avatar: 'https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar1.png'
    },
    isOpen: true,
    isLeftAligned: true
  }
} satisfies Story
