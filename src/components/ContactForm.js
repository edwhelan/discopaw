import React from 'react'

const ContactForm = () => (
  <footer>
    <form className='footer' name='contact' method="post" data-netlify='true' data-netlify-honeypot='bot-field'>
      <input type='hidden' name='bot-field' />
      <div className="contact-text">
        <label htmlFor="email">Your Email = Free Tunes + More Dance</label>
        <br />
        <input className='text-area' type="email" name="email" id="email" />
      </div>
      <input className='form-butt' type="submit" value="Get Tunes" />
    </form>
  </footer>
)

export default ContactForm
