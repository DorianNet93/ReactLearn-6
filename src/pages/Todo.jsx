import React, {useState} from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TodoStatistics from './TodoStatistics/TodoStatistics';


import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFiler';
import TodoColorPicker from './TodoColorPicker/TodoColorPicker';


function Todo(props) {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState();
  const [color, setColor] = useState([]);
  const [list, setList] = useState([])

  return (
    <Container maxWidth="sm" sx={{my: 3}}>
        <Paper elevation={20} sx={{p: 2}}>
          <Stack direction="row" justifyContent="space-around" alignItems="" spacing={2} sx={{mb: 2}}>
            <TodoForm liftingNewTodo={setNewTodo}/>
            <TodoStatistics list={list}/>
          </Stack>
          <div className='line__decor'></div>
          <Stack direction="row" justifyContent="space-around" alignItems="" spacing={2} sx={{mb: 2}}>
            <TodoColorPicker liftingColor={setColor}/>
            <TodoFilter liftingFilter={setFilter} />
          </Stack>
        <TodoList newTodo={newTodo} filter={filter} color={color} liftingList={setList}/>
        </Paper>
    </Container>
  );
}

export default Todo;