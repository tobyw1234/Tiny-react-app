import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddToList from "./components/AddToList";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDo, setToDo] = React.useState(["Setup react Git", "Delete Stuff"]);

  return (
    <div className="App">
      <Header />
      <ToDoList toDo={toDo} />
      <AddToList setToDo={setToDo} />
    </div>
  );
}

export default App;
