import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

class Timer extends Component {
  constructor(props) {
    console.log("1111", props);
    super(props);

    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(this.handleTick, 1000);

    console.log("6666666", this.props.expireDate);
  }

  handleTick = () => {
    console.log(1);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div>현재시간: {moment().format("YYYY-MM-DD A hh:mm:ss")} </div>
        <div>{moment(this.props.expireDate).fromNow()} 에 강의 종료합니다.</div>
      </div>
    );
  }
}

export default Timer;
