import React from 'react'

function ToDoItem() {
  return (
    <div className="flexContainer">
      <input type="checkbox" id="check" name="check" />
      <label for="check">buy apples</label>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sunt,
        sequi laborum.
      </p>
    </div>
  );
}

export default ToDoItem
