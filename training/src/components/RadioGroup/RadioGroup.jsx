import React, { Component } from "react";
class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: "" };
  }
  render() {
    const { onChange, options, value } = this.props;
    return options.map(ele => {
      return (
        <label key={ele.value}>
          <input
            type="radio"
            value={ele.value}
            onChange={onChange}
            checked={value === ele.value}
          />
          {ele.label} <br />
        </label>
      );
    });
  }
}

export default RadioGroup;
