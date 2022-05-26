import React, { useState, useEffect } from 'react';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import MyProfileCSS from './Profile.module.css';
import * as Icon from 'react-bootstrap-icons';
import Backdrop from '../../Components/Backdrop/Backdrop';
import axios from 'axios';

const MyProfile = () => {

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(false);
    const [sendDataValues, setsendDataValues] = useState({title:'',content:''})


    // gets the values from the inputs
    const getValues = (event) => {
        const value = event.target.value;
        setsendDataValues({...sendDataValues,[event.target.name]:value})
    }

    // gets the data from the backend
    const getData = () => {
        axios.get("http://localhost:8080/posts/get").then(res => {
            console.log('res:' ,res)
            setPosts(res.data)
        });
    };

    // sends the data to the backend
    const sendData = () => {
        axios.post('http://localhost:8080/users/mhmd/posts/post',sendDataValues)
    }

    // calls getData()
    useEffect(() =>  getData(), []);

    
    // validates and calls sendData()
    const addPostHandler = () => {
        if (sendDataValues.title === '' && sendDataValues.content === ''){alert('There isn\'t A title nor A description.')}
        else if (sendDataValues.title === ''){alert('There is no title')}
        else if (sendDataValues.content === ''){alert('There is no content')}
        else{
            console.log(sendDataValues)
            sendData();
            window.location.reload(false);
            cancelNewPostHandler();
        }
    }

    // shows the input from
    const openNewPostHandler = () => setNewPost(true)

    // hides the input form
    const cancelNewPostHandler = () => setNewPost(false)
    

        return(

            <div className='mt-4'>
                {posts.map((post) => <ProfileCard key = {post.id} title = {post.title} description = {post.description}/>)}
                <div>
                    <Backdrop show={newPost} clicked={cancelNewPostHandler}/>
                    <div className={[MyProfileCSS.NewPost,'p-2'].join(' ')} style={{transform: newPost ? 'translateY(0)' : 'translateY(-100vh)',opacity: newPost ? '1' : '0'}}>
                        <input name='title' value={sendDataValues.title} type="text" placeholder='Title' className='p-2 my-1' onChange={getValues}/>
                        <textarea name='content' value={sendDataValues.content} cols="30" rows="10" placeholder='Text' className='p-2 mt-1' onChange={getValues}></textarea>
                        <button onClick={addPostHandler}>Submit</button>
                    </div>
                </div>
                <button className={[MyProfileCSS.NewPostButton].join(' ')} onClick={openNewPostHandler}><Icon.VectorPen /></button>
            </div>
        )
}


export default MyProfile


