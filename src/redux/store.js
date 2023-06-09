import React from 'react'
import { combineReducers, createStore } from "redux";
import todosReducer from './reducers/todosReducer';

const rootReducer = combineReducers({

    
    todosState: todosReducer
})


const store = createStore(rootReducer);

export default store
