import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const TodoInsertForm = styled.form`
    width: 400px;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 50px;
    border-radius: 8px;
    margin-bottom: 22px;
`

const TodoInsertInput = styled.input`
    width: 100%;
    font-size: 20px;
    padding: 16px;
    background: white;
    border: none;
    outline: none;
    ::placeholder {
        font-size: 18px;
        color: rgba(0,0,0,0.4);
    }
`
const TodoInsertButton = styled.div`
    font-size: 20px;
    padding: 16px;
    background: skyblue;
    border: none;
    outline: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-sizing: border-box;
    font-size: 18px;
    width: 160px;
    color: white;
    cursor: pointer;
`

function TodoInsert({todoInsertOn}){

    const[value,setvalue] = useState('')
    const onChange= e => setvalue(e.target.value)
    const onSubmit= e => {
        e.preventDefault();
        todoInsertOn(value);
    }



    return (
        <TodoInsertForm onSubmit={onSubmit}>
            <TodoInsertInput value={value} onChange={onChange} placeholder="할 일을 입력해주세요" />
            <TodoInsertButton onClick={onSubmit}>추가하기</TodoInsertButton>
        </TodoInsertForm>
    )
}

export default TodoInsert;