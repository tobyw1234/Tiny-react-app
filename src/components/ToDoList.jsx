import React from "react";
// import {toDo} from "./AddToList";
import App from "../App";

const ToDoList = function (props) {
  console.log(props)
  return (
    <div className="ToDo-List">
      <h2>Things to do</h2>
      <ul>
        {props.toDo.map((item) => {
          return (
            <li key={item}>
              <p>{item}</p>
            </li>)
        })}
      </ul>
    </div>
  );
};

export default ToDoList;