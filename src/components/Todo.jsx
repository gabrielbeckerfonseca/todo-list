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
    alt="Marcar tarefa como concluída"
    title="Marcar como concluída"
    onClick={() => completeTodo(todo.id)}
  />
  <img 
    src="../../../delete.png"
    className="img" 
    alt="Remover tarefa"
    title="Remover tarefa"
    onClick={() => removeTodo(todo.id)}
  />
</div>

    </div>
  )
}

export default Todo