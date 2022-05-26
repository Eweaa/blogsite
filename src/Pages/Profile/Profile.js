import React from 'react';
import ProfileCSS from './Profile.module.css';
import axios from 'axios';

const Profile = (props) => {

    let userName = window.location.href.split('/').pop();

    const [userData, SetUserData] = React.useState({})

    const getUserData = () => axios.get('',userName).then(res => SetUserData(res.data))

    React.useEffect(() => getUserData,[]);


  return (
    <div className={ProfileCSS.profile}>
        <h2>{userName}</h2>
        <h2>The Pussy Destroyer</h2>
        <h5 style={{color:'grey'}}>Calum</h5>
    </div>
  )
}

export default Profile