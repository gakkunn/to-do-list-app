import React, { MouseEvent, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    id: number;
    inputValue: string;
    checked: boolean;
    completedOn?: string;
  };

  //入力値をinputValueに格納
  const handleNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //inputValueを用いてtodosにオブジェクトを配列として格納
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTodo: Todo = {
      id: todos.length,
      inputValue: inputValue,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  return (
    <div className="App">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Title:</label>
              <input type="text" onChange={(e) => handleNewTodoTitle(e)} />
              <button type="button" onClick={(e) => handleSubmit(e)}>
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="change-buttons-wrapper">
          <button className="change-button">To Do</button>
          <button className="change-button-active">Completed</button>
        </div>
        <div className="todo-list-wrapper">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-list-item">
              <div className="todo-list-item-title">
                <h3>{todo.inputValue}</h3>
                <strong className="todo-list-item-time">9月28日</strong>
              </div>
              <div className="todo-list-item-button">
                <button className="todo-list-item-complete">完了</button>
                <button className="todo-list-item-delete">削除</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
