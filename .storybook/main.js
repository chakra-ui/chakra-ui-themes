const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  typescript: {
    reactDocgen: false,
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, viewport: false, actions: false, controls: false },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      'emotion-theming': toPath('node_modules/@emotion/react'),
    }
    return config
  },
}
