import React from 'react'
import { TextField, Button } from 'material-ui'
import Navbar from './Navbar'
import Footer from './Footer'


const Contacts = () => {

  return (
    <div className='main-content'>
      <Navbar />
      <h3>Get in touch</h3>
      <div id="formTop" >
        <h3 id='formTag'> Hey!<br />I would love to hear from you!</h3>
        <form id="contact-form" method="POST" action="https://formspree.io/deadcookies@gmail.com">
          <TextField type="hidden" name="_subject" value="Website contact" />
          <TextField type="text" name="_gotcha" style={{ display: 'none' }} />
          <TextField type="text" placeholder="Your name" name="name" />
          <TextField type="email" placeholder="Your email" name="_replyto" />
          <TextField multiline="true" placeholder="Your message" name="message" />
          <Button id='formSubmitButton' type="submit" value="Send"> Submit </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Contacts