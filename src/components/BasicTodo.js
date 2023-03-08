import React, { useState } from 'react';

const BasicTodo = () => {
    const myBioData=[
        {
            id:0,
            name:"Emon",
            age:22
        },
        {
            id:1,
            name:"Turkey",
            age:23
        },
        {
            id:2,
            name:"Russia",
            age:24
        },
    ]
    const[myArray,setmyArray]=useState(myBioData)
const clearElement=()=>{
    setmyArray([])
}

const removeElement=(id)=>{
   const myNewarray=myArray.filter((data)=>{
     return data.id!=id;
      //console.log(id)
 
   })
   setmyArray(myNewarray)
}
    return (
        <>
           {
               myArray.map((currentElement)=>{
                   return(
                       <h1 key={currentElement.id}>Name:{currentElement.name} &Age :{currentElement.age}
                       <button onClick={()=>removeElement(currentElement.id)}>remove</button>
                       </h1>
                   )
               })
           }
            <button onClick={clearElement}>Clear</button>
        </>
    );
};

export default BasicTodo;