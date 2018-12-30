import React from 'react'

const ContactForm = () => (
  // <form className='footer' name='contact' method="POST" data-netlify='true' data-netlify-honeypot='bot-field'>
  //   <input type='hidden' name='bot-field' value='contact' />
  //   <div className="contact-text">
  //     <label htmlFor="email">Your Email = Free Tunes + More Dance</label>
  //     <input className='text-area' type="email" name="email" id="email" />
  //   </div>
  //   <input className='form-butt' type="submit" value="Get Tunes" />
  // </form>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
    <div className="field half">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <ul className="actions">
      <li><input type="submit" value="Send Message" className="special" /></li>
    </ul>
  </form>

)

export default ContactForm
