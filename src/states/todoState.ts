import { atom } from 'recoil';

export type Todo = {
  id: number;
  inputValue: string;
  checked: boolean;
  datetime: string;
};

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export const todoInputState = atom<string>({
  key: 'todoInputState',
  default: '',
});

export const todoFilterState = atom<boolean>({
  key: 'todoFilterState',
  default: false,
});

export const errorMessageState = atom<string>({
  key: 'errorMessageState',
  default: '',
});
