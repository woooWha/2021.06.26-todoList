import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function TodoModal({modalToggle,selectedTodo,onUpdate}){

    const[value,setvalue] = useState('');
    const onChange= e => setvalue(e.target.value)
    

    useEffect(() => {
        if(selectedTodo) {
            setvalue(selectedTodo.text);
        }
    }, [selectedTodo]);


    const onSubmit = (e) => {
        e.preventDefault();
        onUpdate(selectedTodo.id, value);
        setvalue('');
        modalToggle();
    }
    return(
    <form onSubmit={onSubmit}>
        <div className="background" onClick={modalToggle}></div>
        <input className="modalinput" onChange={onChange} value={value} placeholder="할 일을 수정해주세요"></input>
    </form>
    )
}

export default TodoModal;