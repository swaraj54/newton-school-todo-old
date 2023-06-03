import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");

  console.log(singleTodo, "singleTodo here")

  function handleChange(e) {
    setSingleTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (singleTodo) {
      setTodos([...todos, singleTodo])
      setSingleTodo("");
    } else {
      alert("Type todo!!")
    }
  }

  function deleteTodo(todo) {
    // console.log(todo, "- todo here")
    // for (var i = 0; i < todos.length; i++) {
    //   if(todos[i] == todo){
    //     console.log("Got it")
    //   }
    // }
    const updatedTodos = [...todos];
    const index = updatedTodos.indexOf(todo);
    // console.log(index, "index");
    if (index != -1) {
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    }
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <input value={singleTodo} onChange={handleChange} type='textarea' placeholder='Type your todo here...' />
      <button onClick={handleSubmit}>Add Todo</button>
      <h1>Todos : </h1>
      {todos && todos.map((e, i) => (
        <div key={i} style={{ display: 'flex', width: '20%', border: "1px solid black", margin: 'auto', textAlign: 'center' }}>
          <h3 style={{ width: '60%' }}>{e}</h3>
          <button>Completed ?</button>
          <button onClick={() => deleteTodo(e)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
