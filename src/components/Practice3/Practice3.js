import React, { useState } from 'react';

const Practice3 = () => {
const [text,setText]=useState("");
const handleClick=(e)=>{

 setText(e.target.value)
}

    return (
        <div>
           <input value={text} onChange={handleClick} type="text" />
           <button disabled={!text}>Click</button>
        </div>
    );
};

export default Practice3;