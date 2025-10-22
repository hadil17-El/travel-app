import { useEffect, useState } from "react";
import './create.css';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Create = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleClickLogin = () => {
    navigate('/account');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registrazione completata con successo!');
        navigate('/account');
      } else {
        alert(`Errore: ${data.message}`);
      }
    } catch (error) {
      console.error('Errore:', error);
      alert('Errore di connessione al server.');
    }
  };

  return (
    <section className="create-container" data-aos="fade-up">
      <div className="create-form">
        <h1>Create an Account</h1>
        <h2>Enter details to sign up Travel</h2>

        <div className="sign-buttons">
          <button className="google-btn">
            <i className="bi bi-google"></i> Google
          </button>
          <button className="apple-btn">
            <i className="bi bi-apple"></i> Apple ID
          </button>
        </div>

        <p className="divider">Or sign up with email</p>

        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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

          <label className="remember-me">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => setIsSelected(!isSelected)}
            />
            Remember me
          </label>

          <button type="submit" className="sign-up-btn">Sign up</button>
        </form>

        <p className="last-p">
          Already have an account?{" "}
          <span onClick={handleClickLogin} className="login">Log in</span>
        </p>
      </div>

      <div className="create-image">
        <img src="./imgs/trav.jpg" alt="Travel" />
      </div>
    </section>
  );
};

export default Create;
