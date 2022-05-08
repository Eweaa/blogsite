import React from 'react';
import ProfileCardCSS from './ProfileCard.module.css';

const ProfileCard = (props) => (
    <div className={ProfileCardCSS.ProfileCard}>
        <h2>{props.title}</h2>
        <div className={ProfileCardCSS.Description}>
            <p>{props.description}</p>
        </div>
        <div className={ProfileCardCSS.Tools}>
            <button>Show More</button>
            <button>Comment</button>
        </div>
    </div>
);

export default ProfileCard