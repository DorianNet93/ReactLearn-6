import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import {ITEM_COMPLETED, ITEM_PROGRESS} from '../../constats/TodoConstants';
import './style.css';


function TodoListItem({el, handleItemCompleted, handleItemDelete}) {

  const itemClass = (el) => {
    const classes = [];

    classes.push(el.completed ? ITEM_COMPLETED : ITEM_PROGRESS)

    return classes.join(' ')
  }
  
  return (
    <ListItem className={itemClass(el)} onClick={() => handleItemCompleted(el)} sx={{mb: 1,p: 0}}>
      <ListItemButton sx={{p: 2}}>
        <strong>{el.rating}</strong> {el.title} {" "} 
        <IconButton edge="end" aria-label="delete" onClick={(even) => handleItemDelete(even, el.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>

  );
}

export default TodoListItem;