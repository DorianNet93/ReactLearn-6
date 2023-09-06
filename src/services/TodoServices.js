import axios from "axios";

const API = 'https://64f3654bedfa0459f6c68f1c.mockapi.io/list';

/////////--GET
const getTodo = () => axios(API).then(({data}) => data);

////////--PUT
const changeTodoItem = (id, item) => axios.put(API + `/${id}`, item, {
  headers: {
    'Content-type': 'application/json'
  },
})
  .then(({data}) => data);

//////--DELETE 
const deleteTodoItem = (id) => axios.delete(API + `/${id}`)
  .then(({data}) => data);

//////--ADD
const addTodoItem =(item) => axios.post(API, item, {
  headers: {
    'Content-type': 'application/json'
  },
})
  .then(({data}) => data);



export{ getTodo, changeTodoItem, deleteTodoItem, addTodoItem }  