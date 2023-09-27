import React, { MouseEvent, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState<boolean>(false);

  type Todo = {
    id: number;
    inputValue: string;
    checked: boolean;
    datetime: string;
  };

  //入力値をinputValueに格納
  const handleNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //[追加機能] 追加ボタンを押した時に、オブジェクトを作成
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!inputValue.trim()) {
      alert('入力内容が空です');
      return;
    }

    const newTodo: Todo = {
      id: todos.length,
      inputValue: inputValue,
      checked: false,
      datetime: new Date().toDateString(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  // [完了機能] 完了ボタンを押した時に、そのTodoのcheckedをtrueにする
  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: true,
            }
          : todo
      )
    );
  };

  // [削除機能]
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Title:</label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleNewTodoTitle(e)}
              />
              <button type="button" onClick={(e) => handleSubmit(e)}>
                追加
              </button>
            </form>
          </div>
        </div>
        <div className="change-buttons-wrapper">
          <button
            className={`change-button${!isCompletedScreen ? '-active' : ''}`}
            onClick={() => setIsCompletedScreen(false)}
          >
            未完了
          </button>
          <button
            className={`change-button${isCompletedScreen ? '-active' : ''}`}
            onClick={() => setIsCompletedScreen(true)}
          >
            完了
          </button>
        </div>
        <div className="todo-list-wrapper">
          {todos
            .filter((todo) => isCompletedScreen === todo.checked)
            .map((todo) => (
              <div key={todo.id} className="todo-list-item">
                <div className="todo-list-item-title">
                  <h3>{todo.inputValue}</h3>
                  <strong className="todo-list-item-time">
                    {todo.datetime}
                  </strong>
                </div>
                <div className="todo-list-item-button">
                  {!todo.checked && (
                    <button
                      className="todo-list-item-complete"
                      onClick={() => handleComplete(todo.id)}
                    >
                      完了
                    </button>
                  )}
                  <button
                    className="todo-list-item-delete"
                    onClick={() => handleDelete(todo.id)}
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
