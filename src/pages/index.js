import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContactForm from '../components/ContactForm.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`discopaw`, `music`, `disco`, `paw`]} />
    <div className='video-holder'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OBz50FNd4f0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <form name='contact' method="POST" data-netlify='true' data-netlify-honeypot='bot-field' className='footer' >
      <input type='hidden' name='bot-field' />
      <div className="contact-text">
        <label htmlFor="email">Your Email = Free Tunes + More Dance</label>
        <input className='text-area' type="email" name="email" id="email" />
      </div>
      <input type="submit" value="Get Tunes" className='form-butt' />
    </form>
  </Layout>
)

export default IndexPage
