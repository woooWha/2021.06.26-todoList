import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from "react-icons/md";
import { MdCancel } from "react-icons/md";


const TodoItemBlock = styled.div`
    padding: 16px;
    background: white;
    display: flex;
    align-items: center;
    font-size: 20px;
    width: 400px;
    margin-bottom: 20px;
    border-radius: 8px;
    .text-block {width: 100%;}
`
const DoneBlock = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0,0,0,0.2);
    margin-right: 8px;
    &:hover {
        color: green;
    }
    &:active {
        color: greenyellow;
    }
    ${props =>
        props.checked &&
        css`
        color: black;
        `}
`;

const TextBlock = styled.div`
    width:100%;
    cursor: pointer;
    ${props =>
        props.checked &&
        css`
            text-decoration: line-through;
            color: rgba(0,0,0,0.2);
        `
    }
`

const CancelBlock = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0,0,0,0.2);
    &:hover {
        color: tomato;
    }
    &:active {
        color: red;
    }

`

function TodoItem({todo,onRemove,todoCheckToggle, changeSelected,modalToggle}){
    const{id, checked, text} = todo
    return (
        <TodoItemBlock>
            <DoneBlock onClick={() => todoCheckToggle(id)} checked={checked}><MdDone /></DoneBlock> 
            <TextBlock onClick={()=>{changeSelected(todo); modalToggle();}} checked={checked}>{text}</TextBlock> 
            <CancelBlock onClick={()=>onRemove(id)}><MdCancel /></CancelBlock> 
        </TodoItemBlock>
    )
}

export default TodoItem;