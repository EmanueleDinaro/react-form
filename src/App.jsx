import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    "Pane",
    "mozzarella",
    "pomodoro",
  ]);
  const [newProduct, setNewProduct] = useState("")
  const handleSubmit = event => {
    event.preventDefault()
     setProductList([...productList, newProduct])
    }

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
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={newProduct}
          onChange={(event) => {
            setNewProduct(event.target.value);
          }}
          placeholder="Inserisci un nuovo prodotto"
        />
        <button type="submit">Aggiungi</button>
      </form>
    </>
  );
}

export default App;
