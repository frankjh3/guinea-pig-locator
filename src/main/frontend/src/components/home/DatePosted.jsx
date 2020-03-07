import React, { Component } from "react";
import PropTypes from "prop-types";

class DatePosted extends Component {
  constructor(props) {
    super(props);
    this.state = { currentDate: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date()
    });
  }

  convertTimestamp = () => {
    const timestampObj = new Date(this.props.timeListed + "Z");
    const dateDiff = this.state.currentDate - timestampObj;
    let timeAgo;
    if (dateDiff < 1000 * 60) {
      timeAgo = Math.floor(dateDiff / 1000) + " seconds ago";
    } else if (dateDiff < 1000 * 60 * 60) {
      timeAgo = Math.floor(dateDiff / (1000 * 60)) + " minutes ago";
    } else if (dateDiff < 1000 * 60 * 60 * 24) {
      timeAgo = Math.floor(dateDiff / (1000 * 60 * 60)) + " hours ago";
    } else if (dateDiff < 1000 * 60 * 60 * 24 * 30) {
      timeAgo = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) + " days ago";
    } else if (dateDiff < 1000 * 60 * 60 * 24 * 30 * 12) {
      timeAgo =
        Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30)) + " months ago";
    } else {
      timeAgo =
        Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30 * 12)) + " years ago";
    }
    return timeAgo;
  };

  render() {
    return <React.Fragment>{this.convertTimestamp()}</React.Fragment>;
  }
}

DatePosted.propTypes = {
  timeListed: PropTypes.string.isRequired
};

export default DatePosted;
