import "./App.css";
import React from "react";

function App() {
  const [newItem, setNewItem] = React.useState([
    { updateItem: "update stuff" },
  ]);

  // function makes buttons that set inputItem
  //functuon that pushes inputItem into tasks pushes the thing
  // makes html list ToDolist
  // addToList => div on line 33

  return (
    <div className="App">
      <header>
        <h1 class="App-header">Happy To do list</h1>
      </header>
      <div class="Tasks">{ToDoList(Tasks)}</div>
      {button()}
    </div>
  );
}

const Tasks = ["Setup react Git", "Delete Stuff"];

const AddToList = ([Tasks, newItem]) => {
  let newToDo = [...Tasks];
  newToDo.push(newItem);
  console.log(newToDo);
  return newToDo;
};

const ToDoList = function (newToDo) {
  const toDoArr = newToDo.map((task) => {
    return (
      <>
        <p className="ToDo-List" key={task}>
          {task}
        </p>
      </>
    );
  });
  return (
    <>
      <ul className="ToDo-List"> {toDoArr} </ul>
    </>
  );
};

function button() {
  return (
    <button class="Button" onClick={AddToList(Tasks, "Add to list")}>
      Add to list
    </button>
  );
}

export default App;
