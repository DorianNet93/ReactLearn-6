import React, { useEffect, memo } from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {FILTER_TODO_ALL, FILTER_TODO_COMPLETED, FILTER_TODO_PROGRESS} from '../../constats/TodoConstants'
import useLocalStorage from '../../hooks/useLocalStorage'
import './style.css'

export default memo(function TodoFilter({liftingFilter}) {
  const [filter, setFilter] = useLocalStorage('filter', FILTER_TODO_ALL);

  const handleFilter = (even) => setFilter(even.target.value);

  useEffect(() => {
    liftingFilter(filter)
  },[filter, liftingFilter]);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: '110px', p: '10px', border: 1,borderRadius: '4px' }}>
        <h5 className='title__filter'>Filter:</h5>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleFilter}
          label="Todo Filter"
        >
          <MenuItem value={FILTER_TODO_ALL}>All</MenuItem>
          <MenuItem value={FILTER_TODO_COMPLETED}>Completed</MenuItem>
          <MenuItem value={FILTER_TODO_PROGRESS}>Progress</MenuItem>
        </Select>
      </FormControl>
  );
})