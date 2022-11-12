// TODO: create a component that displays a single bakery item
//https://www.youtube.com/watch?v=S5q4sPe_K_Q&ab_channel=CodeForU
import "../App.css";


export default function BakeryItem({item,handleClick}) {
    const {name, description, price, image} = item

	return(
        <div className = "cards">
            <div className = "image_box">
                <img src={image} alt={name} />
            </div>
            <div className = "details">
                <p>{name}</p>
                <p>{description}</p>
                <p>Price - ${price}</p>
                <button onClick = {() => handleClick(item)}>Add To Cart</button>
            </div>
        </div>
    )

}
