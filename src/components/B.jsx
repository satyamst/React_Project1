import React, { useEffect, useState } from 'react'
import axios from 'axios'

function B() {
  const [product,setproduct]=useState(null)
  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes')
    .then(res=>setproduct(res.data.recipes) );
  },[])
  return (
    <div>
      {
       product && product.map((p,i)=>{
          return(<>
          <p>{p.id}{p.name} Hello
            <br/>{p.ingredients}</p>
            <br/>
            {p.instructions}
          <img src={p.image} alt=''/>
          <hr/>
          </>)
        })
      }

    </div>
  )
}

export default B