import React from "react";
import HomeCardCSS from './HomeCard.module.css';

const HomeCard = (props) => {

    const bookmarkIcons = [<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
</svg>]

let currenticon = bookmarkIcons[0];

    return(
        
        <div className={[HomeCardCSS.HomeCard,'py-4 mx-2'].join(' ')}>
            <div className={HomeCardCSS.HomeCardHeader}>
                <h2>{props.title}</h2>
                <a href="#">@{props.userName}</a>
            </div>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <div className={HomeCardCSS.Tools}>
                <button onClick={props.clicked}>
                    {currenticon}
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
                        <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                    </svg>
                </button>
            </div>
            <textarea type="text" placeholder="Write A comment"/>
        </div>
    )
    
};



export default HomeCard;