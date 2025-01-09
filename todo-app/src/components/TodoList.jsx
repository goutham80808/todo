import React from 'react'
import { TodoCard } from "./TodoCard";

function TodoList(props) {
  const {todos, selectedTab} = props;
  const filterTodoList = selectedTab === 'All' ?
    todos :
      selectedTab === 'Open' ?
      todos.filter(val => !val.complete):
      todos.filter(val => val.complete)
  return (
    <>
      {filterTodoList.map((todo, idx) => {
        return (
            <TodoCard 
              key = {idx} 
              todoIndex = {todos.findIndex(val => val.input ==  todo.input)} 
              {...props}
              todo = {todo} />  
        )
      })}
    </>
  )
}

export default TodoList