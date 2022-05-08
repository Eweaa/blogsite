import React from 'react';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import ProfileCSS from './Profile.module.css';
import {ProfileData} from '../../Data/ProfileData';
import * as Icon from 'react-bootstrap-icons';
import Backdrop from '../../Components/Backdrop/Backdrop';


class Profile extends React.Component {

    // state = [
    //     {title:'ass',description:'ass1'},
    //     {title:'secondass',description:'assfdgfgsiudgiudrffkjgherduihguiedrgkjhdlsguhseriugvlj2'},
    //     {title:'thirdass',description:'ass3'}
    // ]


    state = {
        title: '',
        description:'',
        NewPost: false   
    }


    getValue = () => {
        const title = this.title.value;
        const description = this.description.value;
        console.log(title);
        this.setState({title:title,description:description});
    }

    addPostHandler = () => {
        let title = this.state.title;
        let description = this.state.description;
        if (title === '' && description === ''){alert('There isn\'t A title nor A description.')}
        else if (title === ''){alert('There is no title')}
        else if (description === ''){alert('There is no description')}
        else{
            ProfileData.push({Title:title,description:description})
            console.log(ProfileData);
            this.forceUpdate();
            this.cancelNewPostHandler()
        }
    }

    openNewPostHandler = () => {
        this.setState({NewPost: true})
    }

    cancelNewPostHandler = () => {
        this.setState({NewPost: false})
    }


    render(){
        return(
            <div className='mt-4'>
                {/* {this.state.map(post => (
                    <ProfileCard 
                    key = {post.title}
                    title = {post.title}
                    description = {post.description}
                    />
                ))} */}
                {ProfileData.map((data, key) => 
                <ProfileCard key={key} title={data.Title} description={data.description} />
                )}
                <div>
                    <Backdrop show={this.state.NewPost} clicked={this.cancelNewPostHandler}/>
                    <div className={[ProfileCSS.NewPost,'p-2'].join(' ')} style={{transform: this.state.NewPost ? 'translateY(0)' : 'translateY(-100vh)',opacity: this.state.NewPost ? '1' : '0'}}>
                        <input type="text" placeholder='Title' className='p-2 my-1' onChange={this.getValue} ref={ (input) => this.title = input}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Text' className='p-2 mt-1' onChange={this.getValue} ref={ (input) => this.description = input}></textarea>
                        <button onClick={this.addPostHandler}>Submit</button>
                    </div>
                </div>
                <button className={[ProfileCSS.NewPostButton].join(' ')} onClick={this.openNewPostHandler}><Icon.VectorPen /></button>
            </div>

        )
    }
}


export default Profile



