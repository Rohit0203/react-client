import React, { Component } from "react";
import { PUBLIC_IMAGE_FOLDER } from "../../configs/constant";
import { getRandomNumber, getNextRoundRobin } from "../../lib/utils/math";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      height: props.height,
      random: props.random,
      max: props.banner.length - 1,
      defaultBanner: props.defaultBanner,
      banner: props.banner
    };
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.counter();
    }, this.props.duration);
  }
  componentWillUmount() {
    clearInterval(this.timerID);
  }
  counter() {
    const { random, max, current } = this.state;
    this.setState({
      current: random ? getRandomNumber(max) : getNextRoundRobin(max, current)
    });
  }
  render() {
    const { banner, defaultBanner, height, altText, current } = this.state;

    return (
      <img
        src={`${PUBLIC_IMAGE_FOLDER}${banner[current]}` || defaultBanner}
        alt={altText}
        height={height}
      />
    );
  }
}

export default Slider;
