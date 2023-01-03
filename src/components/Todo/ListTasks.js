import React, { useRef } from "react";

const ListTasks = ({ task, index, removeTask }) => {
  const spanObj = useRef();
  const listObj = useRef();
  return (
    <>
      <div className="list-tasks" ref={listObj}>
        <span ref={spanObj}>{task.title}</span>
        <button
          onClick={() => {
            removeTask(index);
          }}
          className="delete-btn"
        >
          Delete
        </button>
        <button
          onClick={() => {
            console.log(listObj.current, spanObj.current);
            listObj.current.style.backgroundColor = "green";
            spanObj.current.style.textDecoration = "line-through";
          }}
          className="completed-btn"
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default ListTasks;
