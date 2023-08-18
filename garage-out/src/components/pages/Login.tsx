import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
function Login() {

   return(
    <div className="login-container">

        <FontAwesomeIcon icon={faUser} />
        <input type="text" className="login-input" placeholder="email"/>
        <i className="login__icon fas fa-lock"></i>
        <FontAwesomeIcon icon={faLock} />
        <input type="password" className="login-input" placeholder="Password"/>
    </div>
   );
}

export default Login;