import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    
    let color = "black"
    if (count > 0) {
        color = "green";
    }
    if (count < 0) {
         color = "red"
    }
    return(
        <div>
            <div>
                <button onClick={() => setCount(count +1)}>Omhoog</button>
                <div style={{color:color}}>Count: {count}</div>
                <button onClick={() => setCount(count -1)}>Omlaag</button>
            </div>
        </div>
    )
}

export default Counter;