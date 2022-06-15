import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

import styles from "./index.module.css";

const separator = new RegExp(/[\n,]+/);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      copied: false,
      input: ""
    };
  }

  setInput = (value) => {
    this.setState({
      input: value
    });
  };

  convertToColon = () => {
    const lines = this.state.input.split(separator).filter((x) => !!x);
    const output = lines.join(",");
    this.setState({
      output
    });
  };

  convertToColonAndQuote = () => {
    const lines = this.state.input.split(separator).filter((x) => !!x);
    const output = `'${lines.join("','")}'`;
    this.setState({
      output
    });
  };

  convertToColonAndDoubleQuote = () => {
    const lines = this.state.input.split(separator).filter((x) => !!x);
    const output = `"${lines.join('","')}"`;
    this.setState({
      output
    });
  };

  render() {
    const { input, output } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <div className={styles.main}>
          <Box p={8}>
            <Box pb={8}>
              <big>
                <strong>
                  Copy a list of items/rows and convert them to a comma
                  separated string.
                </strong>
              </big>
              <br />
              <small>Useful for queries et al.</small>
              <br />
              <br />

              <FormControl>
                <FormLabel>Input</FormLabel>
                <FormErrorMessage>Error message</FormErrorMessage>
                <Textarea
                  size="lg"
                  resize="horizontal"
                  style={{ height: "15rem" }}
                  value={input}
                  onChange={(e) => this.setInput(e.target.value)}
                />
                <FormHelperText>One item per line</FormHelperText>
              </FormControl>
            </Box>
            <Box pb={8}>
              <Button variant="solid" onClick={this.convertToColon} mr={4}>
                Comma separated
              </Button>
              <Button
                variant="solid"
                onClick={this.convertToColonAndQuote}
                mr={4}
              >
                Comma separated + single quotes
              </Button>
              <Button
                variant="solid"
                onClick={this.convertToColonAndDoubleQuote}
              >
                Comma separated + double quotes
              </Button>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Output</FormLabel>
                <CopyToClipboard
                  text={output}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <span className={styles.copy}>
                    {this.state.copied ? "Copied!" : "Copy"}
                  </span>
                </CopyToClipboard>
                <Textarea
                  size="lg"
                  resize="horizontal"
                  style={{ height: "15rem" }}
                  value={output}
                />
              </FormControl>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
