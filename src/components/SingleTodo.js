import React from 'react'
import { useDispatch } from 'react-redux'

const SingleTodo = ({todo}) => {

  const dispetch= useDispatch()

  const deleteTodo=()=>{
 dispetch({type:"DELETE_TODO", payload:todo.id})

  }
  return (
    <div>
     <h1> {todo.text}</h1>
     <hr/>
     <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default SingleTodo
