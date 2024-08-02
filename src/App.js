import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import CartPage from './LoginForm/CartPage/CartPage';
 
const App = () => {
  return (
<Router>
<Routes>
<Route path="/" element={<LoginForm />} />
<Route path="/cart" element={<CartPage />} />
</Routes>
</Router>
  );
};
 
export default App;