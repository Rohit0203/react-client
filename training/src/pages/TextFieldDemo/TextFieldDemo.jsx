import React from "react";

import TextField from "../../components/TextField/TextField";
import style from "../../components/TextField/style";
class TextFieldDemo extends React.Component {
  render() {
    const { label, dangerInput, inputDefault } = style;
    return (
      <>
        <p style={label}>This is a Disabled Input</p>
        <TextField
          styles={inputDefault}
          value="Disabled Input"
          disabled={true}
        />
        <p style={label}>A Valid input </p>
        <TextField styles={inputDefault} value="Accessible" />
        <p style={label}>An Input with error</p>
        <TextField
          styles={dangerInput}
          value="101"
          error="Could not be  greater than"
        />
      </>
    );
  }
}
export default TextFieldDemo;
