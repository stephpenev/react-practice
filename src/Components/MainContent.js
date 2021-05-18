import React from 'react'
import ToDoItem from '../Components/ToDoItem'


function MainContent() {
  return (
    <div className="checkboxes">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default MainContent;
