import React, { useState } from 'react';

const Practice2 = () => {
    const[ball,setBall]=useState(0);
    const increaseBall=()=>{
const newBall=ball+1;
setBall(newBall)
    }
    const decreaseBall=()=>{
        const decreaseballl=ball-1;
        setBall(decreaseballl)
        if(ball<=0)
        {
            setBall(0)
        }
        
        
    }
    return (
        <div>
         <h2>Ball :{ball}</h2>
         <button onClick={increaseBall}>Increase</button>
         <button onClick={decreaseBall}>Decrease</button>
        </div>
    );
};

export default Practice2;