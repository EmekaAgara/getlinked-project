import React, { Component } from "react";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    // Set your target date and time
    const targetDate = new Date("2023-12-31T00:00:00").getTime();

    // Update the countdown every second
    this.interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        this.setState({ days, hours, minutes, seconds });
      } else {
        // Countdown has reached zero or gone negative, you can handle this case
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <div className="flex gap-5">
          <div className="text-gray-300">
            <span className="countdown text-white font-mono text-4xl">
              <span style={{ "--value": 99 }}></span>
            </span>
            D
          </div>
          <div className="text-gray-300">
            <span className="countdown text-white font-mono text-4xl">
              <span style={{ "--value": hours }}></span>
            </span>
            H
          </div>
          <div className="text-gray-300">
            <span className="countdown text-white font-mono text-4xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            M
          </div>
          <div className="text-gray-300">
            <span className="countdown text-white font-mono text-4xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            S
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
