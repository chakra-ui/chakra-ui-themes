import { ChakraProvider } from '@chakra-ui/react'
import { Story, StoryContext } from '@storybook/react'
import React from 'react'
import * as themes from '../src/index'

export const withThemeProvider = (StoryFn: Story, context: StoryContext) => {
  const theme = themes[context.globals.theme]

  return (
    <ChakraProvider theme={theme}>
      <StoryFn {...context} />
    </ChakraProvider>
  )
}
