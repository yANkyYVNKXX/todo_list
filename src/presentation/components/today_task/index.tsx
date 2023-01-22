import {Grid} from '@mui/material';
import {memo} from 'react';

import {Task} from 'presentation/components/task';
import {Styles} from 'presentation/types/styles.type';

type Props = {
  tasks: TaskType[];
  showTasks: boolean;
};

const TodayTaskComponent = ({tasks, showTasks}: Props) => {
  return (
    <Grid container direction="column">
      <Grid container direction="column" sx={{display: showTasks ? 'block' : 'none', ...styles.container}}>
        {tasks.map(({title, text, id}) => (
          <Task key={id} text={text} title={title} />
        ))}
      </Grid>
    </Grid>
  );
};

export const TodayTask = memo(TodayTaskComponent);

const styles: Styles = {
  container: {
    marginBottom: '32px',
    boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    borderRadius: '40px',
    paddingX: '17px',
    paddingY: '16px',
  },
};
