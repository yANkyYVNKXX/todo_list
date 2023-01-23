import {Grid} from '@mui/material';
import {useState} from 'react';

import {NewsContextProvider} from 'presentation/contexts';
import {News} from 'presentation/sections/news';
import {TodoList} from 'presentation/sections/todo_list';

export const MainLayout = () => {
  const [newsEnable, setNewsEnable] = useState(true);

  return (
    <Grid container justifyContent="center" paddingY="50px" width="100vw" height="100vh" bgcolor="background.default">
      <NewsContextProvider setNewsEnable={setNewsEnable} newsEnable={newsEnable}>
        <TodoList />
        <News />
      </NewsContextProvider>
    </Grid>
  );
};
