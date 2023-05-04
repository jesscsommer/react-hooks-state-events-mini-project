import React from "react";

function Task({ category, text, removeTask }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button name={text} onClick={(e) => removeTask(e.target.name)} className="delete">X</button>
    </div>
  );
}

export default Task;
