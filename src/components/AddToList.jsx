import React from "react";

const AddToList = ({ setToDo }) => {
  const [newToDo, setNewToDo] = React.useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
    
    setToDo((toDo) => {
      return [newToDo, ...toDo];
    });
    setNewToDo('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label">
        Add a new thing to do:
        <input value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)}
          
        />
      </label>
      <button type="submit" className="Button">
        Add item
      </button>
    </form>
  ) 
};

export default AddToList;