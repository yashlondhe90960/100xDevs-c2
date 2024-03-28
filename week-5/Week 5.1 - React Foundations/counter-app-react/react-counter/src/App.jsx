import { useState } from "react";

//todo app
//react way

import "./App.css";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Do 30 minutes of cardio",
    completed: false,
  }, {
    title: "Study DSA",
    description: "Solve 3 problems on leetcode",
    completed: true,

  }, {
    title: "Buy groceries",
    description: "Buy eggs and bread",
    completed: false,

  }]); 
  
  //defining initial state

function addTodo() {
  setTodos([...todos, {
    title: "New todo",
  description: "New description",
  completed: false,
  }])
}

return (
  <div>

    <button onClick={addTodo}>Add a random todo</button>
    {/*<Todo title = {todos[0].title} description = {todos[0].description} />
    <Todo title = {todos[1].title} description = {todos[1].description} />
    <Todo title = {todos[2].title} description = {todos[2].description} />*/}
    {todos.map(function(todo) {
      return <Todo title = {todo.title} description = {todo.description} completed = {todo.completed} />
    })}
  </div>
);

}

//todo app
//title
//desc
//status

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.completed}</h3>
    </div>
  )
}

export default App;