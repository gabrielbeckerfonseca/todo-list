import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
      className="todo" 
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
          <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
    </div>
    <div>        
      <img 
        src="../../../checked.png" 
        onClick={() => completeTodo(todo.id)}
        style={{ cursor: 'pointer', width: '34px', height: '34px', marginRight: '10px' }} 
      />
      {/* "https://www.flaticon.com/free-icons/tick" */}
      <img 
        src="../../../delete.png" 
        onClick={() => removeTodo(todo.id)}
        style={{ cursor: 'pointer', width: '34px', height: '34px',  }} 
      />
      {/* "https://www.flaticon.com/free-icons/recycle-bin" */}
    </div>
    </div>
  )
}

export default Todo