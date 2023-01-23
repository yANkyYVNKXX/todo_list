import {Grid, Typography} from '@mui/material';
import dayjs from 'dayjs';

import {useRandomNews} from 'services';

import {useNewsContext} from 'presentation/contexts';

const newsGap = 50;

export const News = () => {
  const {data} = useRandomNews('techcrunch');

  const {newsEnable} = useNewsContext();

  if (!data || !newsEnable) return null;

  return (
    <Grid container direction="column" paddingX="20px" overflow="hidden">
      <Grid
        container
        sx={{
          animation: `myEffect ${data.articles.length * 5}s infinite linear`,
          '@keyframes myEffect': {
            '0%': {
              transform: `translate(calc(100vw), 0)`,
            },
            '100%': {
              transform: `translate(calc(-${100 * data.articles.length}vw - ${newsGap * data.articles.length}px), 0)`,
            },
          },
        }}
        gap={`${newsGap}px`}
        direction="row"
        flexWrap="nowrap">
        {data.articles.map(({author, content, publishedAt}) => (
          <Grid key={content} item container minWidth="100vw" direction="column">
            <Grid item container xs justifyContent="flex-start">
              <Typography variant="h4">{author}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="primary">{content}</Typography>
            </Grid>
            <Grid item container xs justifyContent="flex-end">
              <Typography variant="secondary">{dayjs(publishedAt).format('DD/MM/YYYY')}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
