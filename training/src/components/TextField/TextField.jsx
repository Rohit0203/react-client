import React, { Component } from "react";
import style from "./style";
class TextField extends Component {
  render() {
    const { dangerMessage } = style;
    const { value, disabled, styles, error } = this.props;
    return (
      <>
        <input style={styles} type="text" value={value} disabled={disabled} />
        <p style={dangerMessage}>{error}</p>
      </>
    );
  }
}
export default TextField;
