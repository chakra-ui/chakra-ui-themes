## Chakra UI - Themes

The project is in experimental state. The API can break at any point in time.

## Usage

```bash
yarn install @chakra-ui/themes
```

```tsx
import { material } from '@chakra-ui/themes'

export const App = () => (
  <ChakraProvider theme={material}>
    <Button colorScheme="blue">Hello, there!</Button>
  </ChakraProvider>
)
```
