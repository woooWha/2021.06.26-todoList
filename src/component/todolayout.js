import React from 'react';
import styled from 'styled-components';
import TodoModal from './todomodal';

const TodoLayoutBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    width: 100%;
    height: 100%;

    h1,p {
        margin:0;
        padding:0;
        color: white;
    }
    p {
        font-size: 24px;
        margin-bottom: 32px;
    }
    .left-task {
        font-size: 16px;
    }
` 
function TodoLayout({children1, children2, length, modal, modalToggle, selectedTodo, onUpdate}){
    return(
        <TodoLayoutBlock>
            {modal && <TodoModal onUpdate={onUpdate} selectedTodo={selectedTodo} modalToggle={modalToggle}></TodoModal> }
            <h1>Todo List</h1>
            <p>Bulit with Svelte,Bulma</p>
            {children1}
            <p className="left-task">남은 일이 {length}개 남았어요</p>
            {children2}
        </TodoLayoutBlock> 
    )
}

export default TodoLayout;