import React from 'react'
import profilePic from '../images/aleks.jpg'
import Page from './Page'

const Home = () => {
  return (
    <Page>

      <div className='bio'>
        <h1>Welcome!</h1>
        <h2>I'm so happy to meet you!</h2>
        <h3>My name is Aleks and I am a fullstack JavaScript software developer with a keen eye for design.</h3>
        <p>I wasn’t born a natural programmer. As a matter of fact, I was born an artist. I became a programmer who enjoys solving challenges in a creative way. Art and tech, for me, is a perfect union, two elements that fulfill and compliment one another.
        I love to learn new things, no matter how tough, and I love to teach others. No matter how tough.
        </p>
        <h4>I hope we can make some beautiful things together</h4>
        <img src={profilePic} className="profile bio" alt="selfImg" />
      </div>

    </Page>
  );
}

export default Home
