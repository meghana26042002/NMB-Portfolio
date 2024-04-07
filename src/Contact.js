import React from 'react'
import './Contact.css'
import { FaUser, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='abc'>
      <p id="cm">Contact Me </p><p class="git12">-----Get In Touch-----</p><div class="git1">
        <p className="l2" >Get In Touch </p> <div class="l1"><h1>Message Me</h1></div><br />
        <form class="m1">
          <input class="i1" placeholder="Name" />
          <input class="i2" placeholder="Email" />
          <input class="i3" placeholder="Subject" />
          <input class="i4" placeholder="Message" />
          <button class="btn">Send message</button>
        </form>
        <div class="icon">
          <FaUser className='icon1' />

          <label> &nbsp;Name</label><p>Nisha Milind Bhujbal</p>
          <br />

          <FaMapMarkedAlt className='icon1' />
          <label>&nbsp; Address</label><p>Ahmednagar Maharashtra</p>

          <br />
          <FaEnvelope />
          <label>&nbsp; Email</label><p>nishabhujbal6@gmail.com</p>
        </div>
      </div></div>
  )
}

export default Contact