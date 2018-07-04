import React, { Component } from "react";

const styles = {
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  margein: "5px"
};

const ulStyles = {
  ListStyle: "none"
};

const LectureGoalList = props => {
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => {
          return (
            <li key={idx}>
              <label>
                <input type="checkbox" />
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LectureGoalList;
