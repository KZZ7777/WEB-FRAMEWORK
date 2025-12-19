import { useState } from "react";

const Checkbox = () => {
    const[showDiv,setShowDiv] = useState(false);
    return(
        <>  
        {/* Hoe werkt de true en false achter deze code; 
            - De checkbox heeft van zichzelf al een checked eigenschap waar true or false is (aangevinkt = true, uit = false)
            - door de onchange veranderd de useState naar true als je op de checkbox klikt
        */}
            <label><input type="checkbox"onChange={(e) => setShowDiv(e.target.checked)} checked={showDiv} />Show/Hide</label>
            {showDiv && <div style={{border: "1px solid black", height: 400, padding:5, backgroundRepeat: "repeat",backgroundImage: 'url("https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif")'}}></div>}
             {/*als showdiv false is gaat die nooit de div laten zien */}
        </>
    )
}


export default Checkbox; 