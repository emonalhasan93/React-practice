import React, { useEffect, useRef, useState } from 'react';

const Userefs = () => {
   const[data,setData]=useState("");
    const inputElement=useRef("")
const changeStyle=()=>{
   inputElement.current.style.backgroundColor="red"
}

console.log(data)
    return (
        <>
        <input ref={inputElement} type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
        <br />
       <button onClick={changeStyle}>Submit</button>
                </>
    );
};

export default Userefs;