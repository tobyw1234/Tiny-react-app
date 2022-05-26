import './App.css';
import React from "react"
function App() {
  
  const [newItem, setNewItem] = React.useState([{updateItem:"update stuff"}]);




// function makes buttons that set inputItem
//functuon that pushes inputItem into tasks pushes the thing
// makes html list ToDolist
// addToList => div on line 33



  return <div className="App">{ToDoList(Tasks)}{button()}</div>;
}

export default App;
  const Tasks = ["Setup react Git", "Delete Stuff"];

  const AddToList = ([Tasks, newItem]) => {
    let newToDo = [...Tasks];
    newToDo.push(newItem);
    console.log(newToDo)
    return newToDo;
  };

const ToDoList = function (newToDo) {
 
  const toDoArr = newToDo.map((task) => {
    return (
      <>
        <li className="ToDo-List" key={task}>
          <li>{task}</li>
        </li>
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
  return <button onClick={AddToList(Tasks,"Wash Car")}>Wash Car</button> 
}


