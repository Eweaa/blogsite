import React from "react";
import HomeCardCSS from './HomeCard.module.css';
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

const HomeCard = (props) => {

    // const filledIcon = 
    // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
    //     <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
    // </svg>;

    // const emptyIcon =
    // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
    //     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    // </svg>;

    const Theme = useTheme();

    const Boomkmark = {
        f:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
    </svg>,
        e:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>
    }

    // const [bookmarksIcon, setBookmarkIcon] = React.useState(emptyIcon)
    // const [options, setOptions] = React.useState(0)

    const [EFB, setEFB] = React.useState()
    let Comp = Boomkmark.e;

    if(EFB === true)
    Comp = Boomkmark.f


    // const changeIcon = () => {
    //     console.log(Boomkmark)
    //     switch (bookmarksIcon) {
    //         case emptyIcon:
    //             setBookmarkIcon(filledIcon)
    //             break;
            
    //         default:
    //             setBookmarkIcon(emptyIcon)
    //             break;
    //     }
    // }

    // const showOptions = () => {
    //     if (options == 0){setOptions(1)}
    //     if (options == 1){setOptions(0)}
    // }


    return(
        
        <div className={[Theme ? HomeCardCSS.dark : HomeCardCSS.light, HomeCardCSS.HomeCard, 'py-4 mx-2'].join(' ')}>

            <div className={HomeCardCSS.HomeCardHeader}>
                <Link>
                    <img src={props.writerImg} alt={props.writer}/>
                    {props.writer}
                </Link>
                
                <div className="mx-2" style={{display: "inline-block"}}>
                    {props.date}
                </div>
            </div>

            <Link className={[HomeCardCSS.HomeCardBody, 'mt-3'].join(' ')}>
                <div>
                    <h3>{props.title}</h3>
                    <p style={{wordBreak:'break-word'}}>{props.details}</p>
                </div>
                <img src={props.articaleImg} alt={props.writer}/>
            </Link>

            <div className={[HomeCardCSS.Tools, 'mt-3'].join(' ')}>
                <button onClick={() => setEFB(!EFB)}>
                    {Comp}
                </button>
            </div>
        </div>
    )
    
};



export default HomeCard;