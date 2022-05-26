import React from 'react';
import HomeCSS from './Home.module.css';
import HomeCard from '../../Components/HomeCard/HomeCard';


class Home extends React.Component {
    alertHandler = () => alert('ass')
    addBookmarkHandler = () => true;
    
    render(){
        return(
            <div className={[HomeCSS.Home,'p-2'].join(' ')}>
                <HomeCard clicked={this.alertHandler} userName='profile1' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='profile2' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='ass' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='ass' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='ass' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='ass' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='ass' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
                <HomeCard clicked={this.alertHandler} userName='ass' date='March 05, 2021' title='Does size really matter?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eius sit ratione voluptate, quaerat hic animi eos suscipit repudiandae maiores vero facilis aspernatur molestiae, ut accusantium. Ratione quam maiores quo!'/>
            </div>
        )
    }
}

export default Home;

