import React from 'react';
import './profile.css';
import Nav from '../components/nav/nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase.js'; 

function ProfileScreen() {
    const user = useSelector(selectUser);
    console.log(user)
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>{user.title}</h3>
                            <button className="profileScreen__signOut" onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
