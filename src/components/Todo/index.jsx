import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './../TodoForm/index';
import '../styles.scss';
function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })
    
    const submitUpdate =value =>{
        updateTodo(edit.id,value);
        setEdit(edit.id,value);
        setEdit({
            id:null,
            value:''
        })
    }
    
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    
    return todos.map((todo,index) => (
        <div className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}
        key={index}>
            <div key={index} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
            <RiCloseCircleLine 
             onClick={() =>removeTodo(todo.id)}
                className='delete-icon'
            />
            <TiEdit onClick={() =>setEdit({id:todo.id,value:todo.text})}
                className='edit-icon'
            />
            </div>
        </div>
    ))
}

export default Todo