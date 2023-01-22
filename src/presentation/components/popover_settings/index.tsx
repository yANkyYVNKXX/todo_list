import {Box, Button, Grid, Popover, TextField, Typography} from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from 'dayjs';
import {ChangeEvent, FormEvent, memo, MouseEvent, useState} from 'react';

import {NewTaskType} from 'data/types/new_type.type';

import {palette} from 'presentation/config/pallete';
import {Styles} from 'presentation/types/styles.type';

import {ReactComponent as Settings} from 'assets/images/icons/settings.svg';

type Props = {
  addTask: (newTask: NewTaskType) => void;
};

const PopoverSettingsComponent = ({addTask}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [date, setDate] = useState<Dayjs>(dayjs(Date.now()));
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue ?? dayjs(Date.now()));
  };

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({text, title, date, id: Date.now()});
    setAnchorEl(null);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <form onSubmit={handleAddTask}>
            <Grid container bgcolor="background.secondary" borderRadius="40px" direction="column" gap="10px">
              <TextField label="Title" value={title} onChange={handleChangeTitle} required />
              <TextField label="Text of task" value={text} onChange={handleChangeText} required />
              <DatePicker
                PaperProps={{
                  sx: styles.datePicker,
                }}
                className="date_picker"
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button type="submit">
                <Typography variant="primary">Add task</Typography>
              </Button>
            </Grid>
          </form>
        </Popover>
      </LocalizationProvider>
    </Box>
  );
};

export const PopoverSettings = memo(PopoverSettingsComponent);

const styles: Styles = {
  datePicker: {
    background: palette.background?.secondary,
    '& .MuiButtonBase-root': {
      background: palette.background?.secondary,
    },
  },
  popoverContentContainer: {
    '& .MuiPaper-root': {background: palette.background?.secondary, borderRadius: '40px', padding: '20px'},
  },
};
