import {Box, Grid, Popover} from '@mui/material';
import {memo, MouseEvent, useCallback, useState} from 'react';

import {NewTaskType} from 'data/types/new_type.type';

import {AddTask} from 'presentation/components/add_task';
import {NewsSettings} from 'presentation/components/news_settings';
import {palette} from 'presentation/config/pallete';
import {Styles} from 'presentation/types/styles.type';

import {ReactComponent as Settings} from 'assets/images/icons/settings.svg';

type Props = {
  addTask: (newTask: NewTaskType) => void;
};

const PopoverSettingsComponent = ({addTask}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //избавляемся от ненужных рендеров дочерних компонент, т.к. useCallback возвращает ту же ссылку на функцию
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Box>
      <Settings onClick={handleOpen} style={{cursor: 'pointer'}} />
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={styles.popoverContentContainer}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <Grid container bgcolor="background.secondary" borderRadius="40px" direction="column" gap="20px">
          <NewsSettings />
          <AddTask addTask={addTask} beforeAddTaskHandler={handleClose} />
        </Grid>
      </Popover>
    </Box>
  );
};

export const PopoverSettings = memo(PopoverSettingsComponent);

const styles: Styles = {
  popoverContentContainer: {
    '& .MuiPaper-root': {background: palette.background?.secondary, borderRadius: '40px', padding: '20px'},
  },
};
