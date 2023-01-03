import React, { useEffect, useState, useRef } from "react";
import ListTasks from "./ListTasks";
import AddTasks from "./AddTasks";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const refObj = useRef();

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`;
    document.body.style.backgroundColor = "#b6b6b7";
  });
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">My TO-DO App</div>
        <div className="add-task">
          <AddTasks addTask={addTask} />
        </div>
        <div className="add-task">
          {tasks.map((task, index) => (
            <ListTasks
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
