import React from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box
} from "@chakra-ui/core";

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <FormControl>
      <FormLabel>Input</FormLabel>
      <FormErrorMessage>Error message</FormErrorMessage>
      <Textarea size="lg" resize="horizontal" />
      <FormHelperText>One item per line</FormHelperText>
    </FormControl>
    <Box>
      <Button variant="solid">Comma separated</Button>
      <Button variant="solid">Comma separated + single quotes</Button>
    </Box>
    <Box />
    <FormControl>
      <FormLabel>Output</FormLabel>
      <FormErrorMessage>Error message</FormErrorMessage>
      <Textarea size="lg" resize="horizontal" />
    </FormControl>
  </ThemeProvider>
);

export default App;
