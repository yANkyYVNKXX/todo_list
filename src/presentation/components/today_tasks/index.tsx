import {Box, Grid} from '@mui/material';
import dayjs from 'dayjs';
import {useMemo} from 'react';

import {Task} from 'presentation/components/today_tasks/task';
import {TodoAccordion} from 'presentation/components/todo_accordion';
import {Styles} from 'presentation/types/styles.type';

type Props = {
  tasks: TaskType[];
  date: string;
  showTodayTasks: boolean;
};

export const Tasks = ({tasks, date, showTodayTasks}: Props) => {
  const isToday = useMemo(() => dayjs(date).isSame(Date.now(), 'date'), [date]);

  const dateFormated: string = useMemo(() => {
    const isTomorrow = dayjs(date).isSame(dayjs(Date.now()).add(1, 'day'), 'date');

    if (isTomorrow) return 'Tomorrow';

    return dayjs(date).format('DD/MM').toString();
  }, [date]);

  if (!showTodayTasks && isToday) return null;

  if (isToday)
    return (
      <Grid container direction="column" sx={styles.container}>
        {tasks.map(({title, text}) => (
          <Task text={text} title={title} />
        ))}
      </Grid>
    );

  return (
    <Box marginBottom="32px">
      <TodoAccordion title={`${dateFormated} Tasks`}>
        {tasks.map(({title, text}) => (
          <Task text={text} title={title} />
        ))}
      </TodoAccordion>
    </Box>
  );
};

const styles: Styles = {
  container: {
    marginBottom: '32px',
    boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    borderRadius: '40px',
    paddingX: '17px',
    paddingY: '16px',
  },
};
