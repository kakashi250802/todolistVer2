import React,{useState} from 'react'
import TodoForm from './../TodoForm/index';
import Todo from './../Todo/index';
import './styles.scss';
function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return 
        }

        const newTodos = [todo,...todos];
        
        setTodos(newTodos);
        console.log(...todos);
    }

    const completeTodo = id =>{
        let updatedTodos =todos.map(todo =>{
            if(todo.id===id){
                todo.isComplete =!todo.isComplete;
            }
        return todo
        })
        setTodos(updatedTodos);
        
    }

    const updateTodo =(todoID,newValue) => {
      
            if(!newValue.text || /^\s*$/.test(newValue.text)){
                return 
            }

            setTodos(prev =>prev.map(item => (item.id ===todoID?newValue :item)))
}

    const removeTodo = id =>{
        const removeArr=[...todos].filter(todo =>todo.id !==id)

        setTodos(removeArr);
    }

    return (
        <div className="todo-app">
            <h1> What's the Plan for today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            className ='todo-container'
            />
        </div>
    )
}
    export default TodoList
    