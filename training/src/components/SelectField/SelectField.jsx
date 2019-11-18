import React, { Component } from "react";
class SelectField extends Component {
  state = {};
  render() {
    const { onChange, options, style } = this.props;
    let option = options.map(ele => {
      return (
        <option key={ele.value} value={ele.value}>
          {ele.label}
        </option>
      );
    });
    return (
      <div>
        <select style={style} onChange={onChange}>
          {option}
        </select>
      </div>
    );
  }
}

export default SelectField;
