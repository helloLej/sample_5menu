import React, {useState, useRef} from 'react'
let idNum = 0

function TodoInput({ todoList, setTodoList }) {
  const [todoItem, setTodoItem] = useState('')
  const inputBox = useRef()

  const handleItem = (e) => {
    const { value } = e.target
    setTodoItem(value)
  }

  const addList = () => {
    if (!todoItem) return
    const insertedList = [...todoList, {id: ++idNum, text:todoItem}]
    setTodoList(insertedList)
    setTodoItem('')
    inputBox.current.focus()
  }

  const enterItem = (e) => {
    if (e.key === 'Enter') {
      addList()
    }
  }

  return (
    <div className="todo_wrap">
      <input
        className="todo_input"
        ref={inputBox}
        type="text"
        name="inputTodo"
        placeholder="What needs to be done?"
        value={todoItem}
        onChange={handleItem}
        onKeyDown={enterItem}
      />
      <button className="todo_addBtn" onClick={addList}>+</button>
    </div>
  )
}

export default React.memo(TodoInput)