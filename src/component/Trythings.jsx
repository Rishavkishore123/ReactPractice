import React from 'react'

const Trythings = () => {
    let arr =["state","Components","Props","ReactJsHooks"]
  return (
    <div> 
        <h1> 
            What topics do we cover to master the react
            </h1>

            <ul>
                {arr.map((items)=>(
                    <li key={items}>{items}</li>
                ))}
            </ul>
    </div>
  )
}

export default Trythings