import React from 'react'
import Navbar from '../Navbar/Navbar'
import LayoutCSS from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../Context/ThemeContext'

const Layout = () => {

    const theme = useTheme();

  return (
    <div className={theme ? LayoutCSS.dark : LayoutCSS.light}>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout