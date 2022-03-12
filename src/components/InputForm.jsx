import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <Box
        component='form'
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ m: 1, width: '50ch' }}
          id='standard-basic'
          label='Type your ToDo'
          variant='standard'
          onChange={handleChange}
          value={inputText}
        />
        <Button variant='contained' type='submit' sx={{ m: 1, width: '25ch' }}>
          add
        </Button>
      </Box>
    </div>
  );
};
