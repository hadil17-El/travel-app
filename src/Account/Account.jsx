import './Account.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Account = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // evita reload
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard'); // esempio redirect
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error: ', error);
      alert('Server error, try again later.');
    }
  };

  return (
    <section className="login-container" data-aos="fade-up">
      <div className="login-form">
        <h1>Hi there!</h1>
        <p>Welcome to Tourista Travel Agency</p>

        <div className="login-buttons">
          <button className="google-btn">
            <i className="bi bi-google"></i> Google
          </button>
          <button className="apple-btn">
            <i className="bi bi-apple"></i> Apple ID
          </button>
        </div>

        <p className="divider">Or</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <a href="#home" className="forgot-password">
            Forgot your password?
          </a>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        <p className="signup-prompt">
          Don’t have an account?{' '}
          <span
            onClick={() => navigate('/create-account')}
            className="signup-link"
          >
            Sign up
          </span>
        </p>
      </div>

      <div className="login-image">
        <img src="./imgs/travel.jpg" alt="Travel" />
      </div>
    </section>
  );
};

export default Account;
