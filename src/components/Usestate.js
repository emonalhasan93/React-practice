import React, { useState } from 'react';

const Usestate = () => {
    const[show,setShow]=useState("Emon Al hasan");
    const handleChange=()=>{
let val=show;
// if(val==="Emon Al hasan")
// return setShow("Hasan Al emon")
// else
// return setShow("Emon Al hasan")
val==="Emon Al hasan"?setShow("Hasan Al emon"):setShow("Emon Al hasan")
    }
    return (
     <>
     <p> {show}</p>
     <button onClick={handleChange}>Submit</button>
     </>
    );
};

export default Usestate;
