import React from 'react';
import TodoInput from './components/todoInput';
import TodoFilterButtons from './components/todoFilterButtons';
import TodoItems from './components/todoItems';
import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { errorMessageState } from './states/todoState';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
};

const AppContent: React.FC = () => {
  const errorMessage = useRecoilValue(errorMessageState);

  return (
    <div className="App">
      <h1 className="todo-title">Todo List</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="todo-wrapper">
        <TodoInput />
        <TodoFilterButtons />
        <TodoItems />
      </div>
    </div>
  );
};

export default App;
