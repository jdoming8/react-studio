import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  
  const [cart, setCart] = useState([])
  const itemMap = bakeryData.map(item => ({...item, amount : 1}))
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <section>
        {itemMap.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <BakeryItem key = {item.index} item = {item} handleClick = {handleClick}></BakeryItem>
        ))}
      </section>
      <div>
        <h2>Cart</h2>
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}></Cart>
      </div>
    </div>
  );
}

export default App;
