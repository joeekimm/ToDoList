import React from 'react';
import ToDoListEntries from './ToDoListEntries';

const ToDoList = (props) => {
  return (
    <div>
      {props.todos.map((elem, index) => {
        return <ToDoListEntries prop={elem} key={index}/>
      })}
    </div>
  );
}

export default ToDoList;