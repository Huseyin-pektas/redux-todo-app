import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SingleTodo from './SingleTodo';

const AddTodoForm = () => {


    const dispatch = useDispatch()

    const [todoText, setTodoText] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault()
        if (todoText == "") {
            alert("alanlar boş olamaz")
            return
        }
        const newTodo = {
            id: String(new Date().getTime()),
            text: todoText,
            date: new Date(),
            isDone: false,

        }
        dispatch( {type:"ADD_TODO" , payload: newTodo})
        setTodoText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={todoText} onChange={(event) => setTodoText(event.target.value)} 
            className="m-4 border border-primary rounded-1" placeholder='Type Your Todo' />
            <button className="btn btn-primary " type='submit'> Ekle</button>

        </form>
    )
}

export default AddTodoForm
