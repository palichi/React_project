import React, { Component } from "react";
import LectureGoalList from "./components/LectureGoalList";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
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
    isExpired: false
  };

  handleComplete = () => {
    this.setState({ isExpired: true });
    console.log("타이머로 부터 호출 받음...");
  };

  render() {
    const { isExpired } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Todos title="강의목표" items={goals} />

        {!isExpired && (
          <Timer
            expireDate={"2018-07-04T16:30+09:00"}
            onComplete={this.handleComplete}
          />
        )}
      </div>
    );
  }
}

export default App;
