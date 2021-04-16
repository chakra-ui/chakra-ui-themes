import { withThemeProvider } from './withThemeProvider'

export const parameters = {
  layout: 'fullscreen',
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Select a Theme',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'default', title: 'Chakra UI' },
        { value: 'material', title: 'Material Design' },
        { value: 'stripe', title: 'Stripe' },
        { value: 'tailwindcss', title: 'Tailwindcss' },
      ],
    },
  },
}

export const decorators = [withThemeProvider]
