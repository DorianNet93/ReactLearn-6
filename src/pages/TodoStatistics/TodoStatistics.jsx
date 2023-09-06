import React, {memo} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import './style.css'

export default memo(function TodoStatistics({list=[]}) {
  return (
    <List sx={{ border: 1, borderRadius: '4px', p: '20px' }}>
      <h3 className='title_statistics'>Statistics:</h3>
      <ListItem sx={{ bgcolor: '', border: 1, borderRadius: '4px', mb: '4px' }}>
        <b>All: {list.length}</b>
      </ListItem>
      <ListItem sx={{ bgcolor: '#85be6d', border: 1, borderRadius: '4px', mb: '4px' }}>
        <b>Compeled: {list.filter(el => el.completed).length}</b>
      </ListItem>
      <ListItem sx={{ bgcolor: '#b67a7a', border: 1, borderRadius: '4px' }}>
        <b>Progress: {list.filter(el => !el.completed).length}</b>
      </ListItem>
    </List>
  );
})