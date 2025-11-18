import React, { useState } from 'react'

function A() {

    const [count,setcount]=useState(0)

    if (count==4){
        throw new Error ("Invalid")
    }
    


  return (
    <div>
        <button onClick={()=>setcount(count+1)}>click me {count}</button>
        </div>
  )
}

export default A