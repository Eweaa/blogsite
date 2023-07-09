import React, { useState } from 'react';
import ProfileCardCSS from './ProfileCard.module.css';
import Backdrop from '../Backdrop/Backdrop';

const ProfileCard = (props) => {

    const [ showPost, setShowPost ] = useState(false);
    

    return (
        <>
            <div className={[ProfileCardCSS.ProfileCard, 'p-2 mb-2'].join(' ')} onClick={() => setShowPost(!showPost)}>
                <h2>{props.title}</h2>
                <div className={ProfileCardCSS.Description}>
                    <p>{props.description.slice(0, 500)}
                        <span> ...</span>
                    </p>
                </div>
                {/* <div className={ProfileCardCSS.Tools}>
                    <button>Show More</button>
                    <button>Comment</button>
                </div> */}
            </div>
            <Backdrop show={showPost} clicked={() => setShowPost(!showPost)}/>
            <div style={{display: showPost ? 'block' : 'none'}} className={[ProfileCardCSS.FullPost, 'p-3'].join(' ')}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
};

export default ProfileCard