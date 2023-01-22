import dayjs, {Dayjs} from 'dayjs';

//можно было сделать проще скорее всего, но не могу тратить много времени, по неймингу констант все подписал, должно быть понятно кто чем здесь занимается
//функция сортирует таски today, tomorrow и остальные по возрастанию
export const sortTasks = (tasks: TasksType) => {
  const sortArray = Object.entries<TaskType[]>(tasks).sort(
    (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime(),
  );
  const todayTasks = sortArray.find((task) => isToday(dayjs(task[0])));
  const tomorrowTasks = sortArray.find((task) => isTomorrow(dayjs(task[0])));

  const arrayWithoutTodayAndTomorrowTask = sortArray.filter(
    (task) => !isToday(dayjs(task[0])) && !isTomorrow(dayjs(task[0])),
  );

  if (tomorrowTasks) {
    arrayWithoutTodayAndTomorrowTask.unshift(tomorrowTasks);
  }

  if (todayTasks) {
    arrayWithoutTodayAndTomorrowTask.unshift(todayTasks);
  }

  const arrayWithoutTodayTask = arrayWithoutTodayAndTomorrowTask.filter((task) => !isToday(dayjs(task[0])));

  return {todayTasks, sortedTasks: arrayWithoutTodayTask};
};

export const isToday = (date: Dayjs) => date.isSame(Date.now(), 'date');

export const isTomorrow = (date: Dayjs) => date.isSame(dayjs(Date.now()).add(1, 'day'), 'date');
