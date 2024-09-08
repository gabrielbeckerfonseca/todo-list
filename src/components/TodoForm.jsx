import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

    return (
        <div className='todo-form'>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Digite o título" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <input
                    type="image" 
                    src="../../../add.png" 
                    style={{ width: '44px', height: '44px', outline: 'none', border: 'none', boxShadow: 'none' }}
                    alt="Adicionar item"
                    title="Adicionar item"
                />

                {/* "https://www.flaticon.com/free-icons/create" */}
            </form>
        </div>
   )
}

export default TodoForm