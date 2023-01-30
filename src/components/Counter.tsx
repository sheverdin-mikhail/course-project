import React, { useState } from "react"
import c from './Counter.module.scss'


const Counter = () => {

    const [count, setCount] = useState(0)

    function incrementHandler() {
        setCount(count + 1)
    }


  return (
    <div>
        <h1>{count}</h1>
        <button className={c.btn} onClick={incrementHandler}>Increment</button>
    </div>
  )
}


export default Counter;