import React, { useState } from 'react';

function Home() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Math.random(),
      title: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="text-center w-full h-full ">
      <h1 >
      <svg className='text-[34px] mt-24 ml-[600px] mb-28' xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 24 24"><defs>
        <clipPath id="lineMdWatchLoop0"><rect width="24" height="12"/></clipPath>
        <symbol id="lineMdWatchLoop1">
          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z" clip-path="url(#lineMdWatchLoop0)"><animate attributeName="d" dur="6s" keyTimes="0;0.07;0.93;1" repeatCount="indefinite" values="M23 16.5C23 11.5 18.0751 12 12 12C5.92487 12 1 11.5 1 16.5z;M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z;M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z;M23 16.5C23 11.5 18.0751 12 12 12C5.92487 12 1 11.5 1 16.5z"/></path></symbol><mask id="lineMdWatchLoop2"><use href="#lineMdWatchLoop1"/><use href="#lineMdWatchLoop1" transform="rotate(180 12 12)"/><circle cx="12" cy="12" r="0" fill="#fff"><animate attributeName="r" dur="3s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"/></circle></mask></defs>
      <rect width="24" height="24" fill="#005aa8" mask="url(#lineMdWatchLoop2)"/></svg>
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input className='border
        rounded-lg bg-white pl-[10px]
        h-[40px]
        ' type="text" value={inputValue} placeholder='add text...' onChange={handleChange} />
        <button className='w-[40px] h-[40px] ml-2 bg-cyan-600 rounded-2xl text-[18px] font-bold text-white ' type="button" onClick={addTodo}>
          +
        </button>
      </form>
      <ul className='mt-[20px]'>
        {todos.map((todo) => (
          <li className='mb-5' key={todo.id}>
            <input
              type="radio"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span className='p-2 mt-[50px]' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button className='bg-red-500 rounded-lg p-2 w-[80px] text-white '  onClick={() => handleDelete(todo.id)}>
              Dalet
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
