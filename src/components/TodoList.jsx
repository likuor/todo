import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: 750, bgcolor: 'background.paper' }}>
        <nav aria-label='secondary mailbox folders'>
          <List>
            {taskList.map((task, value) => {
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge='end' aria-label='comments'></IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(task)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge='start'
                        checked={checked.indexOf(task) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={task.text} />
                    <Button
                      sx={{ width: '20ch' }}
                      variant='outlined'
                      color='error'
                      onClick={() => handleDelete(task.id)}
                    >
                      delete
                    </Button>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </div>
  );
};
