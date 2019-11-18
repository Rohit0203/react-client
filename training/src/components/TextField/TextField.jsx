import React, { Component } from "react";
import { TextFieldStyle } from "./style";
class TextField extends Component {
  render() {
    const { dangerMessage } = TextFieldStyle;
    const { onChange, error, styles } = this.props;

    return (
      <>
        <input style={styles} type="text" onChange={onChange} />
        <p style={dangerMessage}>{error}</p>
      </>
    );
  }
}
export default TextField;
