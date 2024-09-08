import { useState } from 'react';

import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Todo from './components/Todo';

import './App.css';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Lavar e secar a roupa",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar para a prova de Desenvolvimento Web",
      category: "Estudos",
      isCompleted: false
    },
    {
      id: 5,
      text: "Participar da reunião interdisciplinar",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 6,
      text: "Cozinhar a comida para semana",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 9,
      text: "Lavar e aspirar o carro",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 10,
      text: "Ir ao mercado",
      category: "Pessoal",
      isCompleted: false
    }
  ])

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
};

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos); 
};

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
};

  return (
    <div className="app">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="../../../checklist.png" 
          alt="" 
          style={{ width: '44px', height: '44px', marginRight: '30px' }} 
        />
        <h1 style={{ marginRight: '30px' }}>Lista de Tarefas</h1>
      </div>      
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => 
            filter === "All" 
              ? true 
              : filter === "Completed" 
              ? todo.isCompleted 
              : !todo.isCompleted
          )
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) => 
            sort === "Asc" 
              ? a.text.localeCompare(b.text) 
              : b.text.localeCompare(a.text)
          )
          .map((todo) =>(
            <Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo} 
              completeTodo={completeTodo}
            />
          ))
        }
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
