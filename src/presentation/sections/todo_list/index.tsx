import {Checkbox, Grid, Typography} from '@mui/material';
import {ChangeEvent, useMemo, useState} from 'react';

import {NewTaskType} from 'data/types/new_type.type';

import {addTask, sortTasks} from 'core/helpers';

import {PopoverSettings} from 'presentation/components/popover_settings';
import {Tasks} from 'presentation/components/tasks';
import {TodayTask} from 'presentation/components/today_task';
import {palette} from 'presentation/config/pallete';
import {Styles} from 'presentation/types/styles.type';

export const TodoList = () => {
  const [tasks, setTask] = useState<TasksType>({});
  const [showTodayTasks, setShowTodayTasks] = useState(true);

  const {sortedTasks, todayTasks} = useMemo(() => sortTasks(tasks), [tasks]);

  const handleShowTodayTasks = (e: ChangeEvent<HTMLInputElement>) => {
    setShowTodayTasks(e.target.checked);
  };

  const handleAddTask = (newTask: NewTaskType) => {
    setTask((prev) => addTask(prev, newTask));
  };

  return (
    <Grid container direction="column" alignItems="center" bgcolor="background.secondary" sx={styles.container}>
      <Grid item container paddingX="20px" paddingTop="13px" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">To Do</Typography>
        <PopoverSettings addTask={handleAddTask} />
        <Grid item container alignItems="center" gap="8px" marginTop="17px" marginBottom="15px">
          <Checkbox onChange={handleShowTodayTasks} checked={showTodayTasks} />
          <Typography variant="primary">Today Tasks:</Typography>
        </Grid>
        {todayTasks && <TodayTask tasks={todayTasks[1]} showTasks={showTodayTasks} />}
        {sortedTasks.map((tasks) => (
          <Grid item xs={12}>
            <Tasks key={tasks[1][0].id} date={tasks[0]} tasks={tasks[1]} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    borderRadius: '40px',
    width: '390px',
    height: '80%',
    overflow: 'overlay',
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '&::-webkit-scrollbar-track': {
      marginTop: '30px',
      marginBottom: '30px',
      background: 'transparent',
      borderRadius: 2,
    },
    '&::-webkit-scrollbar-thumb': {
      background: palette.scroll?.thumb,
      borderRadius: 2,
    },
  },
};
