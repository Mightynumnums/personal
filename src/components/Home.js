import React from 'react'
import profilePic from '../images/aleks.jpg'
import Page from './Page'




const Home = () => {
  return (
    <Page>

      <div className='bio'>
        <h1>Welcome!</h1>
        <h2>Hello! I'm so happy to meet you!</h2>
        <h3>My name is Aleks and I am a fullstack JavaScript software developer with a keen eye for design.</h3>
        <p>Originally from Russia I've always wanted to be an artist, so I got a degree in Illustration to become a Fine Artist (go figure...). Fast forward 5 years and I landed in specialty coffee, working as a barista and then as a manager for different high end specialty shops in NYC.</p>
        <br />
        After 10 years in the coffee industry I accidentaly fell into tech. Literally, I tried a course on Code Academy and a golden light bulb went off in my brain: 'TECH AND ART | ART AND TECH!'. It was a perfect union I've been looking for. A holy metronomy of unlikely professions.

        <img src={profilePic} className="profile bio" alt="selfImg" />
      </div>

    </Page>
  );
}

export default Home
