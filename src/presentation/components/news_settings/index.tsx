import {Grid, Switch, Typography} from '@mui/material';
import {ChangeEvent} from 'react';

import {useNewsContext} from 'presentation/contexts';

export const NewsSettings = () => {
  const {newsEnable, setNewsEnable} = useNewsContext();

  const handleEnabledNews = (e: ChangeEvent<HTMLInputElement>) => setNewsEnable(e.target.checked);

  return (
    <Grid container justifyContent="space-between">
      <Typography variant="primary">Enable news</Typography>
      <Switch onChange={handleEnabledNews} checked={newsEnable} />
    </Grid>
  );
};
