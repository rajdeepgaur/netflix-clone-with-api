import React, { useState } from 'react';
import './login.css';
import logo from '../img/Netflix_Logo.png';
import SignupScreen from './signup';


function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
          <div className="loginScreen__background">
              <img src={logo} alt="" className="loginScreen__logo"/>
              <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>
              <div className="loginScreen__gradient"></div>
              </div> 
  
           <div className="loginScreen__body">
               {signIn ? (
                   <SignupScreen />
               ): (
                <>
                <h1>Unlimited films, TV programes and more.</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen__input">
                    <form>
                        <input type="email" placeholder="Email Address"/>
                        <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                    </form>
                </div>
                </>
               )}
              
               </div>       
        </div>
    )
}

export default LoginScreen;
