// import React, { useState } from 'react';

// import './LoginForm.css';

 
// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
 
//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
  

//   return (
// <div className="login-container">
// <div className="login-form">
// <label className="Login_label">User Login</label>

// <input type="text" placeholder="User ID" className="input-field" />
// <div className="password-container">
// <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="input-field"
//           />
// <span className="toggle-password" onClick={handleTogglePassword}>
            
// </span>
// </div>
// <button className="continue-button">CONTINUE</button>
// <a href="www.google.com" className="forgot-password">FORGOT PASSWORD</a>
// </div>
// </div>
//   );
// };
 
// export default LoginForm;


//updated code below

import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
 
const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
 
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
 
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
 
  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()!])[A-Za-z\d@#$%^&*()!]{8,20}$/;
    return passwordPattern.test(password);
  };
 
  const validateForm = () => {
    const newErrors = {};
    if (!userId) newErrors.userId = 'User ID is required';
    if (!password) newErrors.password = 'Password is required';
    if (userId && !validateEmail(userId)) newErrors.userId = 'Invalid email format';
    if (password && !validatePassword(password)) newErrors.password = 'Password must be 8-20 characters long, include at least one digit, one upper case letter, one lower case letter, one special character, and no white spaces';
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
 
    try {
      const response = await axios.post('https://localhost:7280/api/Login', {
        userId,
        password,
      });
 
      console.log('Login successful:', response.data);
      // Handle successful login, e.g., save token, redirect, etc.
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error, e.g., display error message
    }
  };
 
  return (
<div className="login-container">
<form className="login-form" onSubmit={handleSubmit}>
<label className="login-label">User Login</label>
<input
          type="text"
          placeholder="User ID"
          className="input-field"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        {errors.userId && <div className="error">{errors.userId}</div>}
<div className="password-container">
<input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<span className="toggle-password" onClick={handleTogglePassword}>
            👁
</span>
</div>
        {errors.password && <div className="error">{errors.password}</div>}
<button type="submit" className="continue-button">CONTINUE</button>
<a href="www.google.com" className="forgot-password">FORGOT PASSWORD</a>
</form>
</div>
  );
};
 
export default LoginForm;