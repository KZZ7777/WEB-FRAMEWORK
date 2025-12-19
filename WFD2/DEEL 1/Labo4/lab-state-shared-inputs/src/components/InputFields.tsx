import { useState } from "react";

const InputFields = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const input = Array.from({length:5}, (_,index)=> index+1)
    return(
        <div>
            {
             input.map(input => <input type="text"  key={input} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>) 
            }
        </div>
    )
}

export default InputFields;