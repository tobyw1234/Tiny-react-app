import React from "react";

const DeleteItem = ({ setToDo }) => {
  const [input, setInput] = React.useState("");

 const handleDelete = (event) => {
    event.preventDefault();
  setToDo((toDo) => {
   console.log(input, "delete pls work")

   return toDo.filter((todo) => {
    return (todo != input)
     })
     
  });
      setInput('');

  };
  return (
    <form onSubmit={handleDelete}>
      <label className="label">
        Item to Delete:
        <input value={input}
          onChange={(event) => setInput(event.target.value)}
          
        />
      </label>
      <button type="submit" className="Button">
        delete item
      </button>
    </form>
  ) 
};

export default DeleteItem;