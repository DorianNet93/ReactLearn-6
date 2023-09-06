import React, {useState, useRef, memo} from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';


import './style.css'
import {addTodoItem} from '../../services/TodoServices'


export default memo(function TodoForm({liftingNewTodo}) {

  const [newTodo, setNewTodo] = useState({
    title: '',
    completed: true,
  });

  const inputTitle = useRef();
  const formNode = useRef()

  const handleTitle = (even) => setNewTodo(prevState => ({...prevState, title: even.target.value}));
  const handleCompeted = (even) => setNewTodo(prevState => ({...prevState, completed: even.target.checked}));

  const handleSubmit = (even) => {
    even.preventDefault();

    if(!newTodo.title){
      inputTitle.current.focus();
      return
    }

    (async () => {
      let addedTodo = await addTodoItem(newTodo);
      liftingNewTodo(addedTodo);
    })()
  }

  return (
    <form onSubmit={handleSubmit} ref={formNode} className='todo__form'>
      <Stack direction="column" justifyContent="space-around" alignItems="center">
        <TextField id="todoTitle" label="Todo Title" size='small' onChange={handleTitle} ref={inputTitle}/>
        <FormControlLabel
          control={<Checkbox checked={newTodo.completed} onChange={handleCompeted} inputProps={{ 'aria-label': 'controlled' }} />}
          label="Todo Completed: "
          labelPlacement="start"
        />
      </Stack>
      <Button type='submit' size='small' sx={{ width: '75%' }} variant="contained"> Add Todo </Button>
    </form>
  );
})