import React from 'react'
import { TextField, Button } from 'material-ui'
import Page from '../components/Page.js'


const Contacts = () => {

  return (
    <Page>

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
    </Page>
  );
}
export default Contacts