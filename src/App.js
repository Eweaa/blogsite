import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, useTheme } from './Context/ThemeContext';
import Layout from './Components/Layout/Layout';

function App() {


  // const data = [
  //   {username:'profile1'},
  //   {username:'profile2'},
  //   {username:'LoganRoy'}
  // ]

  // Getting usernames to put them in the route 

  // const [users, setUsers] = React.useState([]) 
  
  // // const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setUsers(res.data)) //array of objects

  // const getUsers = () => {
  //       axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //           setUsers(res.data)
  //       });
  //   };
  
  //   useEffect(() =>  getUsers(), []);
  
  //   let paths = data.map((path) => path.username)

  //   const logdata = () => console.log(paths)
    
  //   let array = ['profile1','profile2']

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
