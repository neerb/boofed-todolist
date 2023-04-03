import React, { Component } from 'react'
import "./ListItem.css"
import { useState } from 'react';
import { Fade } from 'react-reveal';

const ListItem = ({todo, deleteFunc}) => {

    const [todoName, setTodoName] = useState(todo.name);
    const todoId = todo.id;
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        if(todoName != '') {
            setIsEdit(!isEdit);
        }
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleEdit();
        }
    }

    const handleDelete = () => {
        //console.log("Deleting: " + todoId)
        deleteFunc(todo.key);
    }

    return (
        <Fade>
            <div className="listitem">
                { !isEdit ? 
                <li className="" key={todo.id}>
                    {todoName}
                </li>
                :
                <li>
                    <input className="app_edittaskname-input"
                    key={todo.id}
                    onChange={e => setTodoName(e.target.value)}
                    onKeyDown={handleKeypress}
                    value={todoName}
                    placeholder="Enter a task..."
                    
                    />
                </li>
                }
                {/* <li className="" key={todo.id}>
                    {todo.name}
                </li> */}
                <button type="submit" className='listitem_edit' onClick={handleEdit}>
                    <img src={!isEdit ? require('./images/edit.png') : require('./images/confirmedit.png')} alt="edit"/>
                </button>
                <button className='listitem_delete' onClick={handleDelete}>
                    <img src={require('./images/delete.png')} alt="del"/>
                </button>
            </div>
        </Fade>
    )
};

export default ListItem;
