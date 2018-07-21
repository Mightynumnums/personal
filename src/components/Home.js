import React from 'react'
import profilePic from '../images/aleks.jpg'
import Navbar from './Navbar'
import Footer from './Footer'




const Home = () => {
  return (
    <div className="main main-content">
      <Navbar />
      <div className='bio'>
        <h3>Welcome</h3>
        <p>Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here..</p>

        <img src={profilePic} className="profile bio" alt="selfImg" />
      </div>
      <Footer />
    </div >

  );
}

export default Home
