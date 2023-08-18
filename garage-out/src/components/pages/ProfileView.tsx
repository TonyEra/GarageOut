import '../../css/ProfileView.css';

import { Button } from 'react-bootstrap';
function Login() {

   return(
    <div className="profileview__background">
        <div className="profileview__container">
            
            <div className="profile__field">    
                <h2>First Name:</h2> 
                <input type="text" className="login__input" placeholder=""/>
            </div>
            <div className="profile__field">    
                <h2>Last Name:</h2> 
                <input type="text" className="login__input" placeholder=""/>
            </div>
        </div>
    </div>
   );
}

export default Login;