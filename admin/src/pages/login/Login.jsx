import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import './login.css';


const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        login(dispatch, {username, password});

    };

  return (
    <div className="login">
        <input type="text" placeholder='username' className='loginInput' onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder='password' className='loginInput' onChange={e => setPassword(e.target.value)} />
        <button className='loginButton' onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default Login
