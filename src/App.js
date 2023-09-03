import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './Context/ThemeContext';
import Layout from './Components/Layout/Layout';

function App() {

  return (
    <ThemeProvider>
      <Layout>
        <Outlet />
      </Layout>
        {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
