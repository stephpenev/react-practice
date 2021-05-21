import React from "react";

function ToDoItem(props) {
  const { id, text, completed } = props;
  const handleChange = () => {
    console.log('changed');
  }
  return (
    <div className="flexContainer" key={id}>
      <input type="checkbox" name="check" checked={completed} onChange={handleChange} />
      <label for="check"></label>
      <p>{text}</p>
    </div>
  );
}

export default ToDoItem;
