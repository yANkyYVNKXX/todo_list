import {NewTaskType} from 'data/types/new_type.type';

//функция добавляет таску по дате в объект со всеми тасками
export const addTask = (prev: TasksType, {date, title, text, id}: NewTaskType): TasksType => {
  if (prev[date.toISOString()]) {
    return {...prev, [date.toISOString()]: [...prev[date.toISOString()], {title, text, id}]};
  }

  return {...prev, [date.toISOString()]: [{title, text, id}]};
};
