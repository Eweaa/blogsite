import React from 'react';
import ProfileCSS from './Profile.module.css';
import axios from 'axios';
import { useAuth } from '../../Auth/AuthContext';

const Profile = () => {

    // let userName = window.location.href.split('/').pop();

    // const [userData, SetUserData] = React.useState({})

    // const getUserData = () => axios.get('',userName).then(res => SetUserData(res.data))

    // React.useEffect(() => getUserData,[]);


  return (
    <div className={ProfileCSS.profile}>
      <h1>this is a Profile</h1>
    </div>
  )
}

export default Profile