import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const TIME_FORMAT = "A h:mm";

class Timer extends Component {
  constructor(props) {
    console.log("1111", props);
    super(props);

    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment()
      });
    }, 1000);

    console.log("6666666", this.props.expireDate);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.date.format(TIME_FORMAT) === nextState.date.format(TIME_FORMAT)
    )
      return false;
    else return true;
  }

  render() {
    console.log("rendering...");
    const { expireDate, onComplete } = this.props;
    const { date } = this.state;

    if (moment(expireDate) < date) {
      setTimeout(() => {
        onComplete && onComplete();
      }, 1000);

      return <div>종료 되었습니다.</div>;
    }
    return (
      <div>
        <div>현재시간: {date.format(TIME_FORMAT)} </div>
        <div>{moment(expireDate).fromNow()} 에 강의 종료합니다.</div>
      </div>
    );
  }

  componentWillUnmount() {
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;
