import {NewTask} from 'data/types/new_type.type';

export const addTask = (prev: TasksType, {date, title, text}: NewTask): TasksType => {
  if (prev[date.toISOString()]) {
    return {...prev, [date.toISOString()]: [...prev[date.toISOString()], {title, text}]};
  }
  return {...prev, [date.toISOString()]: [{title, text}]};
};
