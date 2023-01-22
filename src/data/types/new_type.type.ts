import {Dayjs} from 'dayjs';

export type NewTaskType = Omit<TaskType, 'date'> & {
  date: Dayjs;
};
