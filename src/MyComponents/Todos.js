import React from 'react'
import {Todo} from "./Todo";

export const Todos = (props) => {
    let myStyle={
        minHeight: "70vh",
        margin: "10px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">All Tasks</h3>
            {props.todos.length===0? "No To-do Lists!":
            props.todos.map((todo)=>{
               return( 
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
               )
            })
            }
            
        </div>
    )
}
