import React, { Component } from "react";
import LectureGoalList from "./components/LectureGoalList";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import AsyncState from "./components/AsyncState";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

const goals = [
  { title: "React 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "새로운 자바스크립트 문법을 익힌다.", completed: true },
  { title: "개발 편의를 위한 VS Code IDE를 익힌다.", completed: true },
  { title: "기본적인 Git 사용법을 익힌다.", completed: false },
  { title: "PR 코드 리뷰를응용한 개발 프로세스를 익힌다.", completed: true },
  { title: "React 로 간단한 노트 앱을 만들어 본다.", completed: true }
];

class App extends Component {
  state = {
    isExpired: false,
    dateState: "2018-07-04T16:00:00+09:00"
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleComplete = () => {
    this.setState({ isExpired: true });
    console.log("타이머로 부터 호출 받음...");
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  render() {
    console.log("부모 랜더.. ");
    //const isExpired = moment("2018-07-04T16:00:00+09:00") <moment();

    const { isExpired, dateStr } = this.state;

    return (
      <div className="App">
        <Header />
        <AsyncState />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Todos title="강의목표" items={goals} />

        {!isExpired && (
          <Timer
            key={dateStr}
            expireDate={dateStr}
            // onComplete={this.handleComplete}
            onComplete={e => this.handleClick(e, isExpired)}
          />
        )}
      </div>
    );
  }

  handleClick(e, isExpired) {}
}

export default App;
