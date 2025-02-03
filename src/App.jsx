import { useState } from "react";

function App() {
  const [productList, setproductList] = useState([
    "Pane",
    "mozzarella",
    "pomodoro",
  ]);
  const [newProduct, setNewProduct] = useState("")
 
console.log(newProduct);

  return (
    <>
      <h1>Products List</h1>
      <ul>
        {productList.map((product, index) => {
          return <li key={index}>{product}
          <button>cancella</button></li>;
        })}
      </ul>
      <hr />
      <form>
        <input type="text" onChange={event => {setNewProduct(event.target.value)}} placeholder="Inserisci un nuovo prodotto" />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
