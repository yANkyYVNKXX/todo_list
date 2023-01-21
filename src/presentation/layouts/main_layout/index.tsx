import {Grid} from '@mui/material';

import {TodoList} from 'presentation/sections/todo_list';

export const MainLayout = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      bgcolor="background.default">
      <TodoList />
    </Grid>
  );
};
