import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import './CartPage.css';
 
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
 
  useEffect(() => {
    // Fetch cart items from the API
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('https://localhost:7280/api/Cart/items');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
 
    fetchCartItems();
  }, []);
 
  return (
<div className="cart-container">
<header className="cart-header">
<img src="Logo.png" alt="Logo" className="logo" />
<div className="user-info">
<span>Hi Username</span>
<img src="Cart.png" alt="Cart" className="cart-icon" />
</div>
</header>
<div className="cart-items">
        {cartItems.map((item) => (
<CartItem key={item.sku} item={item} />
        ))}
</div>
</div>
  );
};
 
export default CartPage;