import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  extendTheme,
  Container,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Steps } from "chakra-ui-steps"
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
const theme = extendTheme({
  components: {
    Steps,
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={1}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <RouterProvider router={router}></RouterProvider>
      </Grid>     
    </Box>
  </ChakraProvider>
)
