import React from 'react'
import Todoitem from './Todoitem'
import Todolist from './Todolist'
import { useState } from 'react'
import Todoinput from './Todoinput'
import { v4 as uuidv4 } from 'uuid';
import styles from './input.module.css'



const Todo = () => {
   
    const [todos, setTodo] = useState([])
    
    const addTodo=(newtodo)=>{
        setTodo([...todos,{
            
            id: uuidv4(),
            value: newtodo,
        },
    ])
        console.log(todos);
    }
    
    const deleteTodo=(value)=>{
        
        setTodo(todos.filter((ele)=>ele.id !== value))
    }

  return (
    <div className={styles.container}>
       <div>
        <Todolist>
            {todos.map((ele)=>{
              return <Todoitem id={ele.id} key={ele.id} value={ele.value} deleteTodo={deleteTodo}  />
        })}
        </Todolist>
         <Todoinput addTodo={addTodo} />
    </div></div>
  )
}

export default Todo