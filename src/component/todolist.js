import React from 'react';
import styled from 'styled-components';
import TodoItem from './todoitem';

function TodoList({todos,onRemove, todoCheckToggle, changeSelected,modalToggle}){
    return (
        <div>
            {todos.map(todo => 
                <TodoItem todo={todo} todoCheckToggle={todoCheckToggle} changeSelected={changeSelected} onRemove={onRemove} modalToggle={modalToggle} />)}
        </div>
    )
}

export default TodoList;