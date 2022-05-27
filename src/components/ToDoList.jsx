import React from "react";


const ToDoList = function (props) {
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