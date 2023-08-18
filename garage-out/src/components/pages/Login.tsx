import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import '../../css/Login.css';

import { Button } from 'react-bootstrap';
function Login() {

   return(
    <div className="login__background">
        <div className="login__container">
            <div className="login__wrapper">
                <div className="login__field">
                    <FontAwesomeIcon icon={faUser} className="login__icon" />
                    <input type="text" className="login__input" placeholder="Email"/>
                </div>

                <div className="login__field">     
                    <FontAwesomeIcon icon={faLock} className="login__icon" />
                    <input type="password" className="login__input" placeholder="Password"/>
                </div>
                <a className="login__field-link">Forgot Password?</a>
                <div>
                    <button className="login__field-btn">Login</button>{' '}
                    <button className="login__field-btn">Register</button>{' '}
                </div>
                
            </div>
        </div>
    </div>
   );
}

export default Login;