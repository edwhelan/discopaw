import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import JustinImage from '../images/Justin.jpeg'
import DiscoImage from '../images/discopaw.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <div className='contact-div'>
      <div className='one-contact'>
        <p>Justin McEver - Music/Vox</p>
        <p><a href="mailto:Clevermcever@gmail.com">Clevermcever@gmail.com</a></p>
        <p>(404) 683-7141</p>
        <img className='contact-picture' src={JustinImage} alt='justin mcever in front of brick wall' />
      </div>
      <div className='one-contact'>
        <p>Tim Glover - Visuals/Film</p>
        <p><a href="mailto:timglover31@gmail.com">timglover31@gmail.com</a></p>
        <p>‭(404) 707-8393‬</p>
        <img className='contact-picture' src={JustinImage} alt='picture of tim glover' />
      </div>
      <div className='one-contact'>
        <p>Disco Paw - Peace Maker/Dance Giver</p>
        <p><a href="mailto:discopaw@gmail.com">discopaw@gmail.com</a></p>
        <p>1-800-REACHFORTHEPAW</p>
        <img className='contact-picture' src={DiscoImage} alt='disco paw in front of brick wall' />
      </div>
    </div>
  </Layout>
)

export default ContactPage
