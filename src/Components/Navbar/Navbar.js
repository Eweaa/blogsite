import React, { useState } from 'react';
import NavbarCSS from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';

const Navbar = (props) => {

    const {currentUser, logout} = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to Log out')
        }    
    }  

    const [drop, setDrop] = useState(false)



    return(
        <div className='' style={{'width':'90%','margin':'0 auto'}}>
            <nav className={[NavbarCSS.Navbar,'p-4'].join(' ')}>
                <h1>
                    <Link to='/'>The Blog</Link>
                </h1>
                <ul>
                    {/* <li className='mx-2'><Link to="profile">Profile</Link></li> */}
                    <li onClick={() => setDrop(!drop)}>
                        <img src='https://tvline.com/wp-content/uploads/2023/04/succession-season-4-episode-6-kendall-roy.png?w=620'/>
                        <div className={[NavbarCSS.drop, 'p-4'].join(' ')} style={{display: drop ? 'block' : 'none'}}>
                            <Link to='/profile' className='p-2'>Profile</Link>
                            <Link to='/bookmarks' className='p-2'>Bookmarks</Link>
                            <button onClick={handleLogout} className='p-2'>Logout</button>
                        </div>
                    </li>
                    {/* <li className='mx-2'><Link to="bookmarks" className='mx-2'>Bookmarks</Link></li> */}
                    <button className='mx-2' onClick={props.changeTheme}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                        </svg>
                    </button>
                </ul>
            </nav>
            <hr className={NavbarCSS.NavLine}/>
        </div>

    )
    
};

export default Navbar