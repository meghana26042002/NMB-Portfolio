import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Front from './Front'
// import { useNavigate } from 'react-router-dom';

const Nabvar=()=>
{
    // const navigate=useNavigate();
    return(
  <><>
            <div className='nav'><div className='m'>
            <div > <Link className='left' to='/'> Nisha Milind Bhujbal</Link></div>
                <div className='right'>
                    {/* <Link className="name"to='/Home'>Home</Link> */}
                    <Link className="name"to='/About'>About</Link>
                    <Link className="name"to='/Skills'>Skills</Link>
                    <Link className="name"to='/Project'>Project</Link>
                    <Link className="name"to='/Contact'>Contact</Link>
                </div> </div>
            </div>
            </>
            </>
        )

}
export default Nabvar