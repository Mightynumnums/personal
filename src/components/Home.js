import React from 'react'
import profilePic from '../images/aleks.jpg'
import './styles/home.css'


const Home = () => {
  return (
    <div className="main">
      <div className='bio'>
        <p>Hi there! I'm Aleks and I am a software developer with a keen eye for design.
        varius, ultricies justo et, maximus est. Duis nec eleifend orci, id iaculis urna. Etiam vel risus eget elit varius ornare in sit amet leo.
        <br /> Varius, ultricies justo et, maximus est. Duis nec eleifend orci, id iaculis urna. Etiam vel risus eget elit varius ornare in sit amet leo. Mauris non ultrices lorem. Vivamus sem sapien, accumsan eu dui id, commodo mattis lacus. Ut quis condimentum velit. Quisque mi ligula, consectetur id nisi sit amet, semper lobortis ante. Nullam malesuada id diam ultricies congue. Fusce sem diam, egestas vitae elit id, ultricies fermentum dolor. Etiam lobortis condimentum erat a pretium. Donec a orci tellus.
        <br />
          Mauris non ultrices lorem. Vivamus sem sapien, accumsan eu dui id, commodo mattis lacus. Ut quis condimentum velit. Quisque mi ligula, consectetur id nisi sit amet, semper lobortis ante. Nullam malesuada id diam ultricies congue. Fusce sem diam, egestas vitae elit id, ultricies fermentum dolor. Etiam lobortis condimentum erat a pretium. Donec a orci tellus.
          </p>
        <img src={profilePic} className="profile bio" alt="selfImg" />
      </div>
    </div>
  );
}

export default Home
