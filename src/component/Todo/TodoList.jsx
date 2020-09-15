import React from 'react'
let keyNum = 0;

function TodoList({todoList, setTodoList}) {
  
  const removeItem = (id) => {
    const filtered = todoList.filter(el => el.id !== id)
    setTodoList(filtered)
  }

  return (
    <>
      <ul className="todo_list">
        {todoList.map(el=> 
          <li key={++keyNum} className="todo_list__item">
            <div className="todo_itemWrap">
              <span className="todo_list__itemWrap" title={el.text}>{el.text}</span> 
              <button className="todo_list__minusBtn" onClick={() =>removeItem(el.id)}>-</button>
            </div>
          </li>)}
      </ul>
    </>
  )
}

export default React.memo(TodoList)