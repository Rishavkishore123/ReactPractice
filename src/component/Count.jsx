import React, { useEffect } from 'react'
import { useState } from 'react';

const Count = () => {
    const [count, setCount]=useState(0);

    const checkValue=()=>{
        return count===0? "Zero": count;
    }

    const Increament=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    const resetValue=()=>{
            setCount(0);
    }

  
    // useEffect(()=>{
    //     console.log(count)
    // },[count])

    const resetallValue=(()=>{
        

    })




  return (
    <div className='container mt-4 '>

        
        <button className='bg-primary'onClick={Increament}>Increament</button>
        <span className='bg-danger px-5'>{checkValue()}</span>
        <button className='bg-warning'onClick={Decrement}>Decrement</button>
        <span className='bg-primary'>set to be zero</span>
        <button className='bg-secondary'onClick={resetValue}>Reset</button>

        
    </div>
  )
}

export default Count;