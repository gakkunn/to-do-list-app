import React from 'react';
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { todoListState, todoFilterState } from '../states/todoState';

const TodoItems: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const isCompletedScreen = useRecoilValue(todoFilterState);

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
    <div className="todo-list-wrapper">
      {todos
        .filter((todo) => isCompletedScreen === todo.checked)
        .map((todo) => (
          <div key={todo.id} className="todo-list-item">
            <div className="todo-list-item-title">
              <h3>{todo.inputValue}</h3>
              <strong className="todo-list-item-time">{todo.datetime}</strong>
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
  );
};

export default TodoItems;
