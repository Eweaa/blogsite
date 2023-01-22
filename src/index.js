import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyProfile from './Pages/MyProfile/MyProfile';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import Home from './Pages/Home/Home';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'profile',
        element:<MyProfile/>
      },
      {
        path:'bookmarks',
        element:<Bookmarks/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
