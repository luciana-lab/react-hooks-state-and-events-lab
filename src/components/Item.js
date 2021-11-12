import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  const cartClass = cart ? "in-cart" : ""

  const handleCartClick = () => {
    setCart(cart => !cart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">{cart ? "In Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
