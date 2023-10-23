import type { Preview } from '@storybook/vue3'

import '../src/assets/main.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#252525'
        }
      ]
    },
    viewport: {
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: {
            height: '100%',
            width: '100%',
            margin: '3rem'
          }
        }
      },
      defaultViewport: 'desktop'
    }
  }
}

export default preview
