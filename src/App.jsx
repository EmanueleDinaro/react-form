import { useState } from "react";

function App() {
  const [productList, setproductList] = useState([
    "Pane",
    "mozzarella",
    "pomodoro",
  ]);

  return (
    <>
      <h1>Products List</h1>
      <ul>
        {productList.map((product, index) => {
          return <li key={index}>{product}</li>;
        })}
      </ul>
      <hr />
      <form>
        <input type="text" placeholder="Inserisci un nuovo prodotto" />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
