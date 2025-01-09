import React from 'react'

export function TodoCard(props) {
  const {todo, handleDeleteTodo, todoIndex, handleCompleteTodo} = props;
  
  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-button'>
        <button onClick = {() => {
          handleCompleteTodo(todoIndex)
        }}disabled = {todo.complete}>
          <h4>Done</h4>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}>
          <h4>Delete</h4>
        </button>
      </div>
    </div>
  )
}
