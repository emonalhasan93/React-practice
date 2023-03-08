import React, { useState } from 'react';

const Practice1 = () => {
    const error_msg="Not more 18";
    const[text,setText]=useState("");
    const[isError,setError]=useState(false);
    const ageUp=(e)=>{
    setError(false)
    setText(e.target.value)
    if(e.target.value<18)
    {
      setError(true)
    }
    }
    return (
        <div>
            <input value={text} onChange={ageUp} type="text" />
 {
   isError ?error_msg:null
 }
        </div>
    );
};

export default Practice1;