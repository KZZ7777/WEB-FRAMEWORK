import { useState } from 'react'
import './App.css'
// opzoeken wrm die ineens interface gebruikt en hoe een interface werkt?
//we
interface shoppingListItem {
  name:string;
  quantity: number,
}
const ShoppingList = () =>{

  const [shoppingList , setShoppingList] = useState<shoppingListItem[]>([]);
  const [name,setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);

 // opzoeken wrm we de addShoppinglist nu in de button toevoegen maar niet in de setshoppinglist in de input name konden invoegen of in de form 

 
// click functie van add 
  const addShoppingList = () => {
    setShoppingList([...shoppingList, {name:name, quantity:quantity}]) //opzoeken de logische orde
  } 

  // click functie van remove
  // hier heb je index voor nodig als para omdat we de index verwijderen van de array
  const removeShoppingItem = (i:number) =>{
    // filter nodig voor verwijderen 
    let shoppingListCopy =  shoppingList.filter((item, index)=> i !== index);
    setShoppingList(shoppingList);

  }
return(
  <>

    <div>
      <div>Item added to the shopping list</div>
      <div>Name must not be empty</div>
      <div>Quantity must be greater than 0</div>
    </div>
    <div>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}/><br />
        <button onClick={addShoppingList}> Add</button>
    </div>


    <div>
      <table>
        <thead>
         <tr>
          <th>Name</th>
          <th>Quantity</th>
         </tr>
        </thead>

        <tbody>

          {
            shoppingList.map((item,index) =>

          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td><button onClick={()  => {removeShoppingItem(index)}}>Remove</button></td>
          </tr>


            )
          }
        </tbody>
      </table>
    </div>
  </>
)};



function App() {

  return (
    <>
    <ShoppingList/> 
    </>
  )
}

export default App

//wnr je input velden maakt, hoort die zijn eigen state te hebben 