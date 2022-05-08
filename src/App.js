import React from 'react';
import AppCSS from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Bookmarks from './Pages/Bookmarks/Bookmarks';

function App() {
  return (
    <div className={AppCSS.App}>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='bookmarks' element={<Bookmarks />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
