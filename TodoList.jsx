import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import './TodoList.css';



export default function TodoList(){
    const [todos, setTodos] = useState([{task: "Sample Task", id: uuidv4(),isDone:false }]);
    const [newTodo, setNewTodo] = useState("");

    
    let addNewTask=()=>{
        setTodos((prevTodos)=> {
            return [...prevTodos, {task: newTodo, id: uuidv4(),isDone:false}];
        })
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    //filter to remove or pop the todo item from the list
    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo)=> prevTodo.id !== id))
    }

   let marlAllDone = () => {
  setTodos((prevTodos) => {
    return prevTodos.map((todo) => {
      return {
        ...todo,
       isDone:true,
      };
    });
  });
};


let markAsDone=(id)=>{
   setTodos((prevTodos) => {
    return prevTodos.map((todo) => {
        if(todo.id == id){
            return {
        ...todo,
        isDone:true,
      };
        }else{
            return todo;
        }
      
    });
  });
}


    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <input placeholder="Enter a task" value={newTodo} onChange={updateTodoValue}></input>
            <br/><br/>
            <button onClick={addNewTask}>Add</button>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>

            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul className="todo-list">
                {todos.map((todo)=>{
                    return (
                    <li className="todo-item" key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>
                        {todo.task}
                        </span>
                        &nbsp;&nbsp;
                    <button onClick={()=> deleteTodo(todo.id)}>Delete Task</button>
                    <button onClick={()=> markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                    )
                })
                
                }
                
            </ul>
         
            <button onClick={marlAllDone}>Mark All Done</button>
        </div>
    )
}