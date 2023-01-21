import {Box, Grid, Switch, Typography} from '@mui/material';
import {useMemo} from 'react';

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

  return (
    <Grid container alignItems="center" sx={styles.container}>
      <GridBorderLeft item xs={9} overflow="hidden" borderColor={randomColor}>
        <Typography variant="primary" sx={styles.textOverflow} marginBottom="5px" marginLeft="14px">
          {title}
        </Typography>
        <Typography variant="secondary" sx={styles.textOverflow} marginLeft="14px">
          {text}
        </Typography>
      </GridBorderLeft>
      <Grid item container xs={3} justifyContent="flex-end">
        <Switch
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
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};
