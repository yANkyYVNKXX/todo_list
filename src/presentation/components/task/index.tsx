import {Box, Grid, Switch, Typography, Tooltip} from '@mui/material';
import {ChangeEvent, useMemo, useState} from 'react';

import {getRandomColor} from 'core/helpers';

import {GridBorderLeft} from 'presentation/components/grid_border_left';
import {Styles} from 'presentation/types/styles.type';

import {ReactComponent as CheckedSwitcherIcon} from 'assets/images/icons/switcher/checkedIcon.svg';
import {ReactComponent as SwitcherIcon} from 'assets/images/icons/switcher/defaultIcon.svg';

type Props = {
  title: string;
  text: string;
};

export const Task = ({title, text}: Props) => {
  const randomColor = useMemo(() => getRandomColor(), []);
  const [taskComplete, setTaskComplete] = useState(false);

  const handleTaskComplete = (e: ChangeEvent<HTMLInputElement>) => setTaskComplete(e.target.checked);

  return (
    <Grid container alignItems="center" sx={styles.container}>
      <GridBorderLeft item xs={9} overflow="hidden" borderColor={randomColor}>
        <Tooltip title={title}>
          <Typography
            variant="primary"
            sx={{textDecoration: taskComplete ? 'line-through' : 'initial', ...styles.textOverflow}}
            marginBottom="5px"
            marginLeft="14px">
            {title}
          </Typography>
        </Tooltip>
        <Tooltip title={text}>
          <Typography variant="secondary" sx={styles.textOverflow} marginLeft="14px">
            {text}
          </Typography>
        </Tooltip>
      </GridBorderLeft>
      <Grid item container xs={3} justifyContent="flex-end">
        <Switch
          value={taskComplete}
          onChange={handleTaskComplete}
          icon={
            <Box sx={styles.switcherIcon}>
              <SwitcherIcon />
            </Box>
          }
          checkedIcon={
            <Box sx={styles.switcherIcon}>
              <CheckedSwitcherIcon />
            </Box>
          }
        />
      </Grid>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    paddingRight: '14px',
    '&:not(:last-child)': {marginBottom: '32px'},
  },
  switcherIcon: {
    display: 'grid',
    placeContent: 'center',
    borderRadius: '50%',
    height: '25px',
    width: '25px',
    background: 'white',
  },
  textOverflow: {
    cursor: 'default',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};
