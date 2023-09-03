import React, { useState } from 'react';
import ProfileCardCSS from './ProfileCard.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { useTheme } from '../../Context/ThemeContext';

const ProfileCard = (props) => {

    const [ showPost, setShowPost ] = useState(false);
    const Theme = useTheme();
    

    return (
        <>
            <div className={[Theme ? ProfileCardCSS.ProfileCard : ProfileCardCSS.light, 'p-2 mb-2'].join(' ')} onClick={() => setShowPost(!showPost)}>
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
            <div style={{display: showPost ? 'block' : 'none'}} className={[Theme ? ProfileCardCSS.FullPost : ProfileCardCSS.FullPostLight, 'p-4'].join(' ')}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
};

export default ProfileCard