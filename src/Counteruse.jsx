import React ,{useState, useEffect} from 'react';

function CounterUse(){
    const [count, setcount] =useState(0);
    useEffect(() =>{
        console.log('Component mounted or count changed to:${}')
        return () =>{
            console.log('Component unmounted or count changed. Cleaning up....')
        };
    },[count]);
}

const increment =()=>{
    setCount(prevCount => prevCount+1);



return(
        
            <div>
            <p>Count: {count} </p>
            <button onClick={increment}>Increment</button>
            </div>
        );
    };

export default CounterUse;