import React from 'react';
import { useRecoilState } from 'recoil';
import {
  todoListState,
  todoInputState,
  errorMessageState,
} from '../states/todoState';
import { Todo } from '../states/todoState';

const TodoInput: React.FC = () => {
  const MAX_TODOS = 100;
  const [inputValue, setInputValue] = useRecoilState(todoInputState);
  const [todos, setTodos] = useRecoilState(todoListState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);

  //入力値をinputValueに格納
  const handleNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //[追加機能] 追加ボタンを押した時に、オブジェクトを作成
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setErrorMessage('');
    if (!inputValue.trim()) {
      setErrorMessage('入力内容が空です');
      return;
    }
    if (inputValue.length > 50) {
      setErrorMessage('タイトルは50文字以内で入力してください');
      return;
    }
    if (todos.length >= MAX_TODOS) {
      setErrorMessage(`Todoは${MAX_TODOS}個までしか追加できません`);
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
    setErrorMessage('');
  };

  return (
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
  );
};

export default TodoInput;
