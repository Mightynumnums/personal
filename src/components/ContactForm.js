import React from 'react'


const ContactForm = () => {
  <form style={styles.contact} id="contactform" method="POST" action="https://formspree.io/deadcookies@gmail.com">
    <TextField type="hidden" name="_subject" value="Website contact" />
    <TextField type="text" name="_gotcha" style={{ display: 'none' }} />
    <TextField type="text" placeholder="Your name" name="name" />
    <TextField type="email" placeholder="Your email" name="_replyto" />
    <TextField multiline="true" placeholder="Your message" name="message" />
    <Button type="submit" value="Send" onSubmit={this.goHome}> Submit </Button>
  </form>

}



export default ContactForm 