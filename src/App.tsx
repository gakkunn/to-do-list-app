import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input />
            <button>Add</button>
          </div>
        </div>
        <div className="change-buttons-wrapper">
          <button className="change-button">To Do</button>
          <button className="change-button-active">Completed</button>
        </div>
        <div className="todo-list-wrapper">
          <div className="todo-list-item">
            <div className="todo-list-item-title">
              <h3>
                スタイルをあてるスタイルをあてるスタイルをあてるスタイルをあてるスタイルをあてるスタイルをあてる
              </h3>
              <strong className="todo-list-item-time">9月28日</strong>
            </div>
            <div className="todo-list-item-button">
              <button className="todo-list-item-delete">削除</button>
              <button className="todo-list-item-complete">完了</button>
            </div>
          </div>
          <div className="todo-list-item">
            <div className="todo-list-item-title">
              <h3>スタイルをあてる</h3>
              <strong className="todo-list-item-time">9月28日</strong>
            </div>
            <div className="todo-list-item-button">
              <button className="todo-list-item-delete">削除</button>
              <button className="todo-list-item-complete">完了</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
