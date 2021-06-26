import React, { useState } from 'react';
import './App.css';
import TodoLayout from './component/todolayout';
import TodoList from './component/todolist';
import TodoInsert from './component/todoinsert';
import TodoModal from './component/todomodal';

let nextId=4;
function App() {
  const[todos,settodos]= useState([
    {
      id:1,
      checked: false,
      text:'finish Svelte tutorial'
    },
    {
      id:2,
      checked: false,
      text:'build an app'
    },
    {
      id:3,
      checked: false,
      text:'world domination'
    }
  ])

  const[selectedTodo,setSelectedTodo] = useState(null);

  const changeSelected = todo => setSelectedTodo(todo);

  const[modal,setModal] =useState(false);

  const todolength = todos.filter(todo => todo.checked === false)
  const todoInsertOn = (text) => {
    const todo = {
      id:nextId,
      checked: false,
      text,
    }
    settodos(todos => todos.concat(todo))
    nextId++
  }

  const todoCheckToggle = (id) => {
    settodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo ))
  }

  const onUpdate = (id,text) => {
    settodos(todos => todos.map(todo => todo.id===id ? {...todo, text:text}: todo))
  }

  const onRemove = (id) => {
    settodos(todos => todos.filter(todo => todo.id !== id))
  }

  const modalToggle = () => setModal(!modal)


  return (
    <TodoLayout modalToggle={modalToggle} onUpdate={onUpdate} selectedTodo={selectedTodo} length={todolength.length} modal={modal} modalToggle={modalToggle}
      children1={<TodoInsert todoInsertOn={todoInsertOn}/>} 
      children2={<TodoList todos={todos} todoCheckToggle={todoCheckToggle} changeSelected={changeSelected} onRemove={onRemove} modalToggle={modalToggle}/>} >
    </TodoLayout>
  );
}

export default App;
