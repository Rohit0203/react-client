import React, { Component } from "react";
import { TextField, SelectField, RadioGroup } from "../../components/index";
import { TextFieldStyle } from "../../components/TextField/style";
import { SelectFieldStyle } from "../../components/SelectField/style";

import {
  SPORTS,
  CRICKET_PLAYER,
  FOOTBALL_PLAYER
} from "../../configs/constant";

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sport: "",
      cricket: "",
      football: ""
    };
  }
  radioValue = "";
  radio = [];
  handleInput = e => {
    this.setState({ name: e.target.value });
  };
  handleSelect = e => {
    const { value } = e.target;
    if (value === "cricket") {
      this.setState({ football: "" });
    }
    if (value === "football") {
      this.setState({ cricket: "" });
    } else {
      this.setState({ cricket: "", football: "" });
    }
    this.setState({ sport: value });
  };
  handleRadio = e => {
    if (this.state.sport === "cricket") {
      this.setState({ cricket: e.target.value });
      this.radioValue = e.target.value;
    } else {
      this.setState({ football: e.target.value });
      this.radioValue = e.target.value;
    }
  };
  render() {
    console.log(this.state);
    const { name, sport } = this.state;
    sport === "cricket"
      ? (this.radio = CRICKET_PLAYER)
      : sport === "football"
      ? (this.radio = FOOTBALL_PLAYER)
      : (this.radio = []);
    return (
      <>
        <div>
          <h4>Name</h4>
          <TextField
            styles={TextFieldStyle.inputDefault}
            error=""
            value={name}
            onChange={this.handleInput}
          />
        </div>
        <div>
          <h4>Select the game you play?</h4>
          <SelectField
            style={SelectFieldStyle.inputDefault}
            error=""
            value=""
            onChange={this.handleSelect}
            options={SPORTS}
          />
        </div>
        {this.radio.length !== 0 && (
          <div>
            <h4>What you do?</h4>
            <RadioGroup
              options={this.radio}
              error=""
              value={this.radioValue}
              onChange={this.handleRadio}
            />
          </div>
        )}
      </>
    );
  }
}

export default InputDemo;
