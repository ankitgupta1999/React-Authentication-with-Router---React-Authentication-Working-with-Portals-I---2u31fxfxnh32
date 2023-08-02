import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if(email.trim() === '' || password.trim() === ''){
            return;
        }

        localStorage.setItem('user', JSON.stringify({email, password}));
        setEmail('');
        setPassword('');
    }

    return (
        <div className='register'>
            <h2>Register</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            {isSubmitted && (email.trim() === '' || password.trim() === '') && (
          <p className="error-para">"Email or password isn't entered!"</p>
        )}
                <div className='email-div'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='password-div'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className='register-btn'>Register</button>
            </form>
            <div>
                Already have an account?
                <Link to="/login"><button className='login-link'>Login</button></Link>
            </div>
        </div>
    )
}

export default Register;
