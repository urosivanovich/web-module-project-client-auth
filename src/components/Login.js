import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const history = useHistory()

   const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', user)
        .then(resp => {
            console.log(resp)
            localStorage.setItem('token', resp.data.token);
            history.push('/friends')
        })
        .catch(err => {

        })
    }


    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username: </label>
                <input 
                name='username'
                type='text'
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='username'>Password: </label>
                <input 
                type='password' 
                name='password'
                onChange={handleChange}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
    )
  };

  export default Login;