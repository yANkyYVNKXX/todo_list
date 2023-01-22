import {Grid, Typography} from '@mui/material';
import dayjs from 'dayjs';

import {useRandomNews} from 'services';

export const News = () => {
  const {data} = useRandomNews('techcrunch');

  console.log(data);

  if (!data) return null;

  return (
    <Grid container direction="column" paddingX="20px">
      <Grid item container xs justifyContent="flex-start">
        <Typography variant="h4">{data.author}</Typography>
      </Grid>
      <Typography variant="primary">{data.content}</Typography>
      <Grid item container xs justifyContent="flex-end">
        <Typography variant="secondary">{dayjs(data.publishedAt).format('DD/MM/YYYY')}</Typography>
      </Grid>
    </Grid>
  );
};
