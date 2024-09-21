import React, { useState } from 'react';
import { login } from '../../state/api';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing the custom CSS file for styling

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.token);
      console.log(response);
      navigate('/dashboard');
      alert('Logged in successfully');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Username"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="form-input"
            />
          </div>
          <div className="form-forgot">
            <a href="#" className="forgot-password">Forget Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="signup-link">
            Not a Member?{' '}
            <a href="/register" className="signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
