import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
      <div className='login'>
          <span className="loginTitle">Login</span>
          <form className="loginForm">
              <label>Email</label>
              <input className='loginInput' type="text" placeholder='Enter your email' />
              <label>Password</label>
              <input className='loginInput'type="password" placeholder='Enter your password' />
              <button className="loginButton">
                <Link to="/login" className='link'>LOGIN</Link>
              </button>
          </form>
          <button className="loginRegisterButton">
            <Link className='link' to="/register" >REGISTER</Link>
          </button>
      </div>
  );
}
