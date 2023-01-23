import {NewTaskType} from 'data/types/new_type.type';

//функция добавляет таску по дате в объект со всеми тасками
export const addTask = (prev: TasksType, {date, title, text, id}: NewTaskType): TasksType => {
  const dt = date.format('YYYY-MM-DD');

  if (prev[dt]) {
    return {...prev, [dt]: [...prev[dt], {title, text, id}]};
  }

  return {...prev, [dt]: [{title, text, id}]};
};
