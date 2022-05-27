
const RandomizeList = function (props) {
 const toDoArr = props.toDo
 
const toDoArrLength = toDoArr.length
const RandNum = Math.floor(Math.random()*toDoArrLength)

 function handleRandom() {
  for (let i = props.toDo.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [props.toDo[i], props.toDo[j]] = [props.toDo[j], props.toDo[i]];
  }
  const setToDo = props.setToDo

  
   
 
 }

 
 return <button onClick ={handleRandom}   className="Button">Randomzie</button>
 
}
export default RandomizeList

