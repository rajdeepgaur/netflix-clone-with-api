import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './nav.css';
import logo from '../../img/Netflix_Logo.png';
import avatar from '../..//img/Netflix-avatar.png';

function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
     }else{
        handleShow(false);
     }
    };

    useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
           <div className="nav__contents">
           <img src={logo} 
           onClick={() => history.push("/")}
            alt="" 
            className="nav__logo"/>

            <img src={avatar}
            onClick={() => history.push("/profile")}
            alt="" 
            className="nav__avatar"/>
            </div>
        </div>
    )
}

export default Nav
