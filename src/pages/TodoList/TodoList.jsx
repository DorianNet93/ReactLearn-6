import React, {useState, useEffect, useMemo} from 'react';

import List from '@mui/material/List';

import { getTodo, changeTodoItem, deleteTodoItem } from '../../services/TodoServices'
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import {FILTER_TODO_COMPLETED, FILTER_TODO_PROGRESS} from '../../constats/TodoConstants'

function TodoList({newTodo, filter, color, liftingList}) {
  let [list, setList] = useState([]);
  let [filteredList, setFiltererdList] = useState ([]);

  const sortedList = useMemo(() => {
    return filteredList.sort((a,b) => b.rating - a.rating);
  },[filteredList]);

  useEffect(() => {
    getTodo()
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  useEffect(() => {
    setFiltererdList(list);
    liftingList(list)
  }, [list, liftingList])

  useEffect(() => {
    Object.keys(newTodo).length && setList(prevState => [...prevState, newTodo])
  },[newTodo]);

  useEffect(() => {
    switch(filter){
      case FILTER_TODO_COMPLETED:
        setFiltererdList(list.filter((el) => el.completed))
        break;
      case FILTER_TODO_PROGRESS:
        setFiltererdList(list.filter((el) => !el.completed))
        break;
      default:
        setFiltererdList(list)     
    }
  },[filter, list]);

  const handleItemCompleted = (el) => {
    changeTodoItem(el.id, { completed: !el.completed })
      .then((changeItem) => {
        setList((prevState) =>
          prevState.map((elem) => (elem.id === el.id ? changeItem : elem))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const handleItemDelete = (event, id) => {
    event.stopPropagation();
  
    deleteTodoItem(id)
      .then(() => {
        setList((prevState) => prevState.filter((el) => el.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return list.length
  ? <List style={{color}}>
      {sortedList.map((el,i) => 
        <TodoListItem key={i} el={el} handleItemCompleted={handleItemCompleted} handleItemDelete={handleItemDelete} />
        )}
    </List>
  : null
}

export default TodoList;