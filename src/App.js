import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
// import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState } from "react";
import { nanoid } from "nanoid"

function App(props) {

  // function addTask(name) {
  //   alert(name);
  // }
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(tasks)
  }


  const taskList = props.tasks.map((task) => <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id} />);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
