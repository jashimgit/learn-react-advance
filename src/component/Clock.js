import React from "react";
import Button from "./Button";

export default class Clock extends React.Component {
  state = { date: new Date(), locale: "en-US" };

  // this.changeClock = this.changeClock.bind(this);

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = () => {
    if (this.state.locale === "en-US") {
      this.setState({ locale: "bn-BD" });
    } else {
      this.setState({ locale: "en-US" });
    }
  };
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h3> {date.toLocaleTimeString(locale)}</h3>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}
