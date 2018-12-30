import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContactForm from '../components/ContactForm.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`discopaw`, `music`, `disco`, `paw`]} />
    <div className='video-holder'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IVDGQ7JoEc8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* <ContactForm /> */}
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
  </Layout>
)

export default IndexPage
