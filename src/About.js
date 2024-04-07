import React from "react";
import './About.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
const About = () => {
    return (
        <>
            < div className="back1"><div class="back">
                <p class="am"> About  Me </p>
                <p class="git">-----Who I Am-----</p>

                <div>
                    <ul>
                        <li className="p1">Education:-Bachlor Of Engineering (Computer)
                            <br />From-MESCOE Wadia College,Pune.
                        </li>
                        <li className="p1">Work:- Fresher </li>
                        <li className="p1">knowledge:-C,C++,JAVA,HTML,CSS,JS,React</li>
                    </ul>
                </div>
                <div className="icons">
                    <p className="link" style={{ color: 'black' }}><a href="https://www.linkedin.com/in/nisha-bhujbal-155a00211/"> <FaLinkedin />&nbsp; https://www.linkedin.com/in/nisha-bhujbal-155a00211/</a></p>
                    <p className="github">  <a href="https://github.com/NMB662001"><FaGithub />&nbsp; https://github.com/NMB662001</a></p>
                    <p className="email"><FaEnvelope />&nbsp; nishabhujbal6@gmail.com</p>
                </div>
            </div></div>
        </>
    )
}
export default About