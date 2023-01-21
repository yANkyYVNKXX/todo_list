import {Dayjs} from 'dayjs';

export type NewTask = Omit<TaskType, 'date'> & {
  date: Dayjs;
};
