// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginForm.css';
 
// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
 
//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
 
//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };
 
//   const validatePassword = (password) => {
//     const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()!])[A-Za-z\d@#$%^&*()!]{8,20}$/;
//     return passwordPattern.test(password);
//   };
 
//   const validateForm = () => {
//     const newErrors = {};
//     if (!username) newErrors.username = 'User ID is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (username && !validateEmail(username)) newErrors.username = 'Invalid email format';
//     if (password && !validatePassword(password)) newErrors.password = 'Password must be 8-20 characters long, include at least one digit, one upper case letter, one lower case letter, one special character, and no white spaces';
 
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
 
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) return;
 
//     try {
//       const response = await axios.post('https://localhost:7280/api/Login/login', {
//         username,
//         password,
//       });
 
//       console.log('Login successful:', response.data);
//       // Handle successful login, e.g., save token, redirect, etc.
//     } catch (error) {
//       console.error('Error logging in:', error);
//       // Handle login error, e.g., display error message
//     }
//   };
 
//   return (
// <div className="login-container">
// <form className="login-form" onSubmit={handleSubmit}>
// <label className="login-label" htmlFor="username">User Login</label>
// <input
//           type="text"
//           id="username"
//           placeholder="User ID"
//           className="input-field"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         {errors.username && <div className="error">{errors.username}</div>}
// <div className="password-container">
// <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             placeholder="Password"
//             className="input-field password-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
// <span className="toggle-password" onClick={handleTogglePassword}>
//             👁
// </span>
// </div>
//         {errors.password && <div className="error">{errors.password}</div>}
// <button type="submit" className="continue-button">CONTINUE</button>
// <a href="www.google.com" className="forgot-password">FORGOT PASSWORD</a>
// </form>
// </div>
//   );
// };
 
// export default LoginForm;

// Updated Code
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
 
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 
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
    if (!username) newErrors.username = 'User ID is required';
    if (!password) newErrors.password = 'Password is required';
    if (username && !validateEmail(username)) newErrors.username = 'Invalid email format';
    if (password && !validatePassword(password)) newErrors.password = 'Password must be 8-20 characters long, include at least one digit, one upper case letter, one lower case letter, one special character, and no white spaces';
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
 
    try {
      const response = await axios.post('https://localhost:7280/api/Login/login', {
        username,
        password,
      });
 
      console.log('Login successful:', response.data);
      navigate('/cart');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
 
  return (
<div className="login-container">
<form className="login-form" onSubmit={handleSubmit}>
<label className="login-label" htmlFor="username">User Login</label>
<input
          type="text"
          id="username"
          placeholder="User ID"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div className="error">{errors.username}</div>}
<div className="password-container">
<input
            type={showPassword ? "text" : "password"}
            id="password"
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