import React, { useState } from "react";
import "../index.css";


function Comp(){
    // const state=useState();
    const [count , setcount]=useState(0);
     const IncNum=()=>{
        setcount(count + 1);
     }
    return (
        <>
        <div className="comp">
            <div className="data">
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
            </div>
        </div>
        </>
    )
}

export default Comp;