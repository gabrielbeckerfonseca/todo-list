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
        className="img"
        onClick={() => completeTodo(todo.id)}
      />
      {/* "https://www.flaticon.com/free-icons/tick" */}
      <img 
        src="../../../delete.png"
        className="img" 
        onClick={() => removeTodo(todo.id)}
      />
      {/* "https://www.flaticon.com/free-icons/recycle-bin" */}
    </div>
    </div>
  )
}

export default Todo