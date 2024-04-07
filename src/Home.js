import React from "react";
import './Home.css';
import img1 from './photo.png';
const Home = () =>
{
    return(
        <>
        <div className="abc">

            <div className='first'>Hello,my name is</div>
            <div className="second" >Nisha Mlind Bhujbal</div>
            <div className="third">And I'm a Web Developer</div>
             <a href="https://drive.google.com/file/d/1_es4DoE7tJUBYcABoOy-a879yO-Pu6Li/view?usp=drive_link"><button className='four'> Hire Me</button></a>
             {/* <a href="/Front"><button className='four'> Hire Me</button></a> */}
             <div className="img">
            <img src={img1} alt="photo"  />
            </div>
        </div>
        </>
        
    )
}
export default Home