import {Button, Grid, TextField, Typography} from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from 'dayjs';
import {ChangeEvent, FormEvent, memo, useState} from 'react';

import {NewTaskType} from 'data/types/new_type.type';

import {palette} from 'presentation/config/pallete';
import {Styles} from 'presentation/types/styles.type';

type Props = {
  addTask: (newTask: NewTaskType) => void;
  beforeAddTaskHandler?: () => void;
};

const AddTaskComponent = ({addTask, beforeAddTaskHandler}: Props) => {
  const [date, setDate] = useState<Dayjs>(dayjs(Date.now()));
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue ?? dayjs(Date.now()));
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({text, title, date, id: Date.now()});
    beforeAddTaskHandler?.();
  };

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleAddTask}>
        <Grid container direction="column" gap="15px">
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
            renderInput={(params) => <TextField {...params} sx={styles.datePickerInput} />}
          />
          <Button type="submit">
            <Typography variant="primary">Add task</Typography>
          </Button>
        </Grid>
      </form>
    </LocalizationProvider>
  );
};

export const AddTask = memo(AddTaskComponent);

const styles: Styles = {
  datePickerInput: {
    '& path': {
      fill: palette.text?.primary,
    },
  },
  datePicker: {
    background: palette.background?.secondary,
    '& .MuiButtonBase-root': {
      background: palette.background?.secondary,
    },
    '& path': {
      fill: palette.text?.primary,
    },
  },
};
