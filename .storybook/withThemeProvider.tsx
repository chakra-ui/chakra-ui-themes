import { ChakraProvider } from '@chakra-ui/react'
import { Story, StoryContext } from '@storybook/react'
import React from 'react'

export const withThemeProvider = (StoryFn: Story, context: StoryContext) => (
  <ChakraProvider>
    <StoryFn {...context} />
  </ChakraProvider>
)
