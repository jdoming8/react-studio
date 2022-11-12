// TODO: create a component that displays a single bakery item
//https://www.youtube.com/watch?v=S5q4sPe_K_Q&ab_channel=CodeForU
import "../App.css";
import { useState,useEffect } from "react";


export default function Cart({cart, setCart, handleChange}) {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        console.log("handle price")
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
      };

    useEffect(() => {
    handlePrice();
    });
    

	return(
        <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
        
            <div>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>${price}</span>
        </div>
      </article>
    )

}