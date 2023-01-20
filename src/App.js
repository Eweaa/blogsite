import React, { useEffect } from 'react';
import AppCSS from './App.module.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import Profile from './Pages/Profile/Profile';
import axios from 'axios';

export const ThemeContext = React.createContext(null);



function App() {


  const data = [
    {username:'profile1'},
    {username:'profile2'},
    {username:'ass'},
    {username:'ass4'}
  ]


  const [theme, setTheme] = React.useState('dark')
  const changeTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  // Getting usernames to put them in the route 

  const [users, setUsers] = React.useState([]) 

  
  // const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setUsers(res.data)) //array of objects

  const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log('res:' ,res)
            setUsers(res.data)
        });
    };
  
    useEffect(() =>  getUsers(), []);
  
    let paths = data.map((path) => path.username)

    const logdata = () => console.log(paths)
    
    
    

  let array = ['profile1','profile2','ass']
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={AppCSS.App} id={theme}>
        <Navbar changeTheme={changeTheme}/>
        {/* <button onClick={logdata}>Click</button> */}
        <Routes>
          <Route path='/' index element={<Home />}/>
          <Route path='profile' element={<MyProfile />}/>
          <Route path='bookmarks' element={<Bookmarks />}/>
          {paths.map((path, index) => 
          <Route path={path} element={<Profile />} key={index}/>
          )}
        </Routes>
        {/* <Footer /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
