import React from "react";


function Counter(){
    let count= 0;
    
    const increment =() => {
        count+=1;
        console.log(count);
    };
    return(

        <div>
        <p>Count: {count} </p>
        <button onClick={increment}>Increment</button>
        </div>
    );
    };


export default Counter;