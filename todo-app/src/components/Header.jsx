import React from 'react'

function Header(props) {
    const {todos} = props;
    const todosLength = todos.length;
    const isPlural = todosLength != 1;
    const taskOrTasks = isPlural ? "tasks" : "task";
  return (
    <header>  
        <h1 className='text-gradient'>
            You've {todosLength} open {taskOrTasks}
        </h1>
    </header>
  )
}

export default Header