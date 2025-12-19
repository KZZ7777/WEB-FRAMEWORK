import { useState } from "react";


const ColorSelect = () => {
    const [selectedColors, setSelectedColors]= useState<string[]>([]);
    const [color, setColor] = useState<string[]>([]);
    
// functie onchange

    const onchange: React.ChangeEventHandler<HTMLSelectElement>  = (e) =>{
        let selectedOption:string[] = []; // we hebben dit gemaakt aangezien we niet kunnen pushen met onze state, dus deze nieuwe array met de waarde die we willen opslaan wordt meegegeven aan setSelectedColors
        for( let option of Array.from(e.target.selectedOptions)){ // remember: deze selectedOptions is niet dezelfde als selectedOption array
            selectedOption.push(option.value)
        }      
        // Array.from(e.target.selectedOptions) = > we hebben dit in een Array.from gedaan zodat we de e.target.selectedOptions hebben omgezet in een array (zodat we ook array elementen kunnen gebruiken)

        // ez versie:
        // let selectedOption: Array.from(e.target.selectedOptions).map(option => option.value) 
        setSelectedColors(selectedOption)
    }
  



    return(
        <>
            <div>
                <select multiple value={selectedColors} onChange={onchange} >
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Purple">Purple</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                </select>
                
                    <button onClick={() => setColor([...selectedColors])}>Show colors</button>
                    
                <div>
                    {/* dit zorgt voor het visuele aspect + we kunnen alleen de knop zien als je op de knop drukt */}
                    {color.map((color) => <div style={{background:color, height:400, width:400}}></div>
                    )}
                </div>
            </div>

        </>
    )
} 

export default ColorSelect;