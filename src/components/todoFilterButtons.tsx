import React from 'react';
import { useRecoilState } from 'recoil';
import { todoFilterState } from '../states/todoState';

const TodoFilterButtons: React.FC = () => {
  const [isCompletedScreen, setIsCompletedScreen] =
    useRecoilState(todoFilterState);

  return (
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
  );
};

export default TodoFilterButtons;
