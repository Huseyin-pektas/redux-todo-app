import React from 'react'


const initialState =[]

const todosReducer = (state=initialState , action) => {
     if(action.type === "ADD_TODO"){
     let newState=[...state,action.payload]

     return newState
    }
    if(action.type === "DELETE_TODO"){
      let newState=state.filter(item=>item.id !==action.payload)
 
      return newState
     }
 

  return state
}

export default todosReducer
