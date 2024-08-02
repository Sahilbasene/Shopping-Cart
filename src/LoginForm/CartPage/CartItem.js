import React from 'react';
import './CartItem.css';
 
const CartItem = ({ item }) => {
  return (
<div className="cart-item">
<img src={item.image} alt={item.name} className="item-image" />
<div className="item-details">
<h3>{item.name}</h3>
<p>{item.vendor}</p>
<p>SKU: {item.sku}</p>
<p>MFR #: {item.mfr}</p>
<p>Price: ${item.price}</p>
<p>Location: {item.location}</p>
<p>RSC QTY: {item.rscQty}</p>
</div>
<button className="add-to-basket">ADD TO BASKET</button>
</div>
  );
};
 
export default CartItem;