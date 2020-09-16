import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './style.css'

function Todo() {
  const [todoList, setTodoList] = useState([])

  return (
    <>
      {todoList.length > 0 && (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      )}
      {todoList.length < 5 ? (
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <p className="todo_msg">The list is full.</p>
      )}
    </>
  )
}

export default Todo
