import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Posts = () => {
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>setTodos(data))
    },[])
    return (
        <div>
            <h1>Welcome to our toodos :</h1>
            {
           todos.map(todo=><Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Posts;