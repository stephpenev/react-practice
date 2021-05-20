import React from "react";

function ToDoItem(props) {
  const { id, text, completed } = props;
  return (
    <div className="flexContainer" key={id}>
      <input type="checkbox" name="check" checked={completed} />
      <label for="check"></label>
      <p>{text}</p>
    </div>
  );
}

export default ToDoItem;
