import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import MyProfile from './Pages/MyProfile/MyProfile';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import { AuthProvider } from './Auth/AuthContext';
import ProtectedRoute from './Auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProtectedRoute><App /></ProtectedRoute>,
    children:[
      {
        path:'/',
        element:<ProtectedRoute><Home/></ProtectedRoute>
      },
      {
        path:'/profile',
        element:<ProtectedRoute><MyProfile/></ProtectedRoute>
      },
      {
        path:'/bookmarks',
        element:<ProtectedRoute><Bookmarks/></ProtectedRoute>
      },
    ]
  },
  {
    path:'/login',
    element:<LogIn />
  },
  {
    path:'/signup',
    element:<SignUp />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
);
