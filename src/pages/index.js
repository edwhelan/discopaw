import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`discopaw`, `music`, `disco`, `paw`]} />
    <div className='video-holder'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IVDGQ7JoEc8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
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
  </Layout>
)

export default IndexPage
