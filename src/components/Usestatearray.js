import React, { useState } from 'react';

const Usestatearray = () => {
    const myData=[
        {
            id:0,
            name:'Emon Al Hasan',
            age:22
        },
        {
            id:1,
            name:'Adnan Al Hasan',
            age:24
        },
    ]

    const[myArray,setmyArray]=useState(myData);

    const changeArray=()=>{
        const val=myArray;
   val===myData?setmyArray([]):setmyArray(myData)
        
    }

    // const removeElement=(id)=>{
    //     alert(id)
    // }
    
    return (
        <>
         {
             myArray.map((data)=> <h1>Name :{data.name} Age:{data.age}</h1>)
         }
            <button onClick={changeArray}>Clear</button>
        </>
    );
};

export default Usestatearray;