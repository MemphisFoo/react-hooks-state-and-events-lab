import React, {useState} from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(false)
  
  function handleCart() {
    setCartStatus((cartStatus) => !cartStatus)
  }


  return (
    <li className={cartStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartStatus ? "remove" : "add"} onClick={handleCart}> {cartStatus ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false);

//   function handleAddToCartClick() {
//     setIsInCart((isInCart) => !isInCart);
//   }


// return (
//   <li className={isInCart ? "in-cart" : ""}>
//     <span>{name}</span>
//     <span className="category">{category}</span>
//     <button
//       className={isInCart ? "remove" : "add"}
//       onClick={handleAddToCartClick}
//     >
//       {isInCart ? "Remove From" : "Add to"} Cart
//     </button>
//   </li>
// );
// }

export default Item;
