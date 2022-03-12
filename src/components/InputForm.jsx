import { useState } from 'react';

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
      <form action='' onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputText} />
        <Button variant='contained' type='submit'>
          add
        </Button>
      </form>
    </div>
  );
};
