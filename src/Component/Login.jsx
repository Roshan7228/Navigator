import axios from 'axios';
import React, { useState } from 'react';
import './style.css';

function Login() {
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const myobj = {
            email: Email, 
            password: Password, 
        };

        console.log(myobj); 

        axios.post('https://reqres.in/api/login', myobj)
            .then((res) => {
                const correct = res.data.token;
                console.log('Login successful! Token:', correct);
                let cards=localStorage.setItem("token",correct);
            })
            .catch((err) => {
                console.error('Login failed:', err);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="email"
                    placeholder="Enter Your Email....."
                    onChange={(e) => SetEmail(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid black',
                        outline: 'none',
                        marginBottom: '10px',
                    }}
                /><br />
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => SetPassword(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid black',
                        outline: 'none',
                        marginBottom: '10px',
                    }}
                /><br />
                <button className="btn1">Submit</button>
            </form>
        </div>
    );
}

export default Login;
