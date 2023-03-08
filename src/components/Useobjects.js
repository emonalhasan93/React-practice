import React, { useState } from 'react';

const Useobjects = () => {
    const mydata=
        {id:1,name:'Emon Al hasan',age:23}
    
    const[update,setUpdate]=useState(mydata)
    const updateName=()=>{
        let val=update;
        val===mydata?setUpdate({name:'Hasan Al rahim',age:25}):setUpdate(mydata)
       
        
    }
    return (
        <>
        <h1>Name:{update.name} & Age:{update.age}</h1>
            <button onClick={updateName}>Update</button>
        </>
    );
};

export default Useobjects;