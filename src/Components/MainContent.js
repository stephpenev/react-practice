import React from 'react'
import {useState} from 'react'
import todosData from '../todosData'
import ToDoItem from './ToDoItem'

function MainContent() {
  const [ toDos, setToDos ] = useState(todosData);

  const toDoComponent = toDos.map(toDo => {
    return <ToDoItem key={toDo.id} text={toDo.text} completed={toDo.completed}/>;
  })
  return (
    <div className="checkboxes">
      {toDoComponent}
    </div>
  );
}

export default MainContent;
