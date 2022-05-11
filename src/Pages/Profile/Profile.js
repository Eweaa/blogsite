import React, { useState, useEffect } from 'react';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import ProfileCSS from './Profile.module.css';
import * as Icon from 'react-bootstrap-icons';
import Backdrop from '../../Components/Backdrop/Backdrop';
import axios from 'axios';

const Profile = () => {

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    
    // getValue = () => {
    //     const title = this.title.value;
    //     const description = this.description.value;
    //     console.log(title);
    //     this.setState({title:title,description:description});
    // }


    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log('res:' ,res)
            setPosts(res.data)
        });
    };

    useEffect(() =>  getData(), []);

    // const getValue = () => {
    //     let Title = title.value
    //     let Description = description.value
    //     setTitle(Title)
    //     setTitle(Description)
    // }

    const addPostHandler = () => {
        let Title = title;
        let Description = description;
        if (Title === '' && Description === ''){alert('There isn\'t A title nor A description.')}
        else if (Title === ''){alert('There is no title')}
        else if (Description === ''){alert('There is no description')}
        else{
            alert('data is entered')
            cancelNewPostHandler()
        }
    }

    const openNewPostHandler = () => setNewPost(true)

    const cancelNewPostHandler = () => setNewPost(false)
    


        
        return(

            <div className='mt-4'>
                {posts.map((post) => <ProfileCard key = {post.id} title = {post.title} description = {post.description}/>)}
                <div>
                    <Backdrop show={newPost} clicked={cancelNewPostHandler}/>
                    <div className={[ProfileCSS.NewPost,'p-2'].join(' ')} style={{transform: newPost ? 'translateY(0)' : 'translateY(-100vh)',opacity: newPost ? '1' : '0'}}>
                        <input type="text" placeholder='Title' className='p-2 my-1' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Text' className='p-2 mt-1' ></textarea>
                        <button onClick={addPostHandler}>Submit</button>
                    </div>
                </div>
                <button className={[ProfileCSS.NewPostButton].join(' ')} onClick={openNewPostHandler}><Icon.VectorPen /></button>
            </div>
        )
}


export default Profile


