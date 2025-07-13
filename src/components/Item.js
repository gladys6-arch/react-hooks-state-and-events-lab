
import React, {useState} from "react";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick(){
    setIsInCart((prevState)=> !prevState)
  }

  const listClass= isInCart ? "in-cart" : "";
  const buttonClass = isInCart ? "remove" : "add";
  

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick} className={buttonClass}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
      
    </li>
  );
}

export default Item;
