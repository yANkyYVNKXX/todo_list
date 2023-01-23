import {Box} from '@mui/material';
import dayjs from 'dayjs';
import {memo, useMemo} from 'react';

import {isTomorrow} from 'core/helpers';

import {Task} from 'presentation/components/task';
import {TodoAccordion} from 'presentation/components/todo_accordion';

type Props = {
  tasks: TaskType[];
  date: string;
};

const TasksComponent = ({tasks, date}: Props) => {
  const formatedDate: string = useMemo(() => {
    const isTomorrowTask = isTomorrow(dayjs(date));

    if (isTomorrowTask) return 'Tomorrow';

    return dayjs(date).format('DD/MM/YYYY').toString();
  }, [date]);

  return (
    <Box marginBottom="32px">
      <TodoAccordion title={`${formatedDate} Tasks`}>
        {tasks.map(({title, text, id}) => (
          <Task key={id} text={text} title={title} />
        ))}
      </TodoAccordion>
    </Box>
  );
};

export const Tasks = memo(TasksComponent);
