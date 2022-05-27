import "./App.css";
import React from "react";
import {useState} from "react"
function App() {
//   const [newItem, setNewItem] = React.useState([
//     { updateItem: "update stuff" },
//   ]);

//   const Tasks = ["Setup react Git", "Delete Stuff"];
//   let workingTasks = [...Tasks];   
//   console.log(workingTasks);

//   function randomise(workingTasks) {
//     let randomInt = Math.floor(Math.random() * 2);
//     // WorkingTasks.push(WorkingTasks.slice(0, randomInt))
//     console.log(Array.isArray(workingTasks));
//   }

  // function button() {
  //   return (
  //     <button className="Button" onClick={randomise}>
  //       Add to list
  //     </button>
  //   );
  // }
  // // function makes buttons that set inputItem
  //functuon that pushes inputItem into tasks pushes the thing
  // makes html list ToDolist
  // addToList => div on line 33

  return (
    <div className="App">
      <header>
        <h1 className="App-header">Happy To do list</h1>
      </header>
      <ToDoList />
    </div>
  );
}

const ToDoList = function () {
  const firstToDo = ["Setup react Git", "Delete Stuff"];
  const [toDo, setToDo] = useState(firstToDo);
  return (
    <div className="ToDo-List">
      <h2>Things to do</h2>
      <ul>
        {toDo.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <AddToList toDo={toDo} />
    </div>
  );
};

const AddToList = ({ setToDo }) => {
  console.log(setToDo);
  return <button className="Button"> button</button>;
};

export default App;
// Ideas
// 
/// fuction that deletes an item from the list
/// function where you click a button and it randomizes the list 