import React, { useState } from 'react';
import css from '../components/Login.css'


const LoginForm = () => {

    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[allEntry,setAllEntry]=useState([])

    const formSubmit=(e)=>{
        e.preventDefault();
        if(email && password)
        {
            const newEntry={id:new Date().getTime().toString(),email,password}


            setAllEntry([...allEntry,newEntry])
            setEmail("")
            setPassword("")
        }
        else
        {
            alert("fill the data")
        }
   
    }

    return (
        <>
            <div className='main'>
                  <form onSubmit={formSubmit} className='form'>
                <div className='email'>
                        <label className='input-label' htmlFor="email">Email</label>
                        <input className='input' type="email" name="" id="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        autoComplete='off' />
                     </div> 

                     <div className='pasword'>
                        <label className='input-label' htmlFor="password">Password</label>
                        <input className='input' type="password" name="" id="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete='off' />
                     </div> 

                     <div className='btn'>
                        <button type='submit' className='login'>Login</button>
                     </div>
                
                </form>
                  
            </div>
            <div>
            {
               allEntry.map((data)=>
               <h1 key={data.id} style={{color:"aqua",textAlign:'center'}}>Email :{data.email}
               <br />
               Password:{data.password}
               </h1>
            
               )
           }
            </div>
         

        </>
    );
};

export default LoginForm;