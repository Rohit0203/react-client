import React from "react";

import TextField from "../../components/TextField/index";
import Slider from "../../components/Slider/index";
import style from "../../components/TextField/style";
import { align } from "../../components/Slider/style";
import { banner, DEFAULT_BANNER_IMAGE } from "../../configs/constant";
class TextFieldDemo extends React.Component {
  render() {
    const { label, dangerInput, inputDefault } = style;
    return (
      <>
        <div style={({ width: "100%" }, align)}>
          <Slider
            altText={"DEFAULT_BANNER_IMAGE"}
            banner={banner}
            defaultBanner={DEFAULT_BANNER_IMAGE}
            duration={2000}
            height={200}
            random={false}
          ></Slider>
        </div>
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
