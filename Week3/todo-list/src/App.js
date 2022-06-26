import React, {useState} from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    setTodo([...todo, newTodo]);
    setNewTodo("");
  }
  const deleteTodo = (delIdx) => {
    const filtered = todo.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodo(filtered);
  }
  return (
    <div className="App">
      <form onSubmit={(event) => {handleNewTodoSubmit(event);}}>
        <input onChange={(event) => {setNewTodo(event.target.value)}} type= "text" value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>
      {
        todo.map((todo, i) => {
          return (
            <div key={i}>
            <span>{todo}</span>
            <button onClick={(event) => {deleteTodo(i)}}>Delete</button>
          </div>
          );
        })
      }
    </div>
  );
}

export default App;
