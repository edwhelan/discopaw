import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import handshake from '../images/handshake.jpg'

const TunesPage = () => (
  <Layout>
    <SEO title="tunes" />
    <div className='tunes-page'>
      <p>More tunes and visuals coming soon, if your thirst is too strong send Disco Paw an email and a present will be teleported to your inbox</p>
      <a href="mailto:discopaw@gmail.com">discopaw@gmail.com</a>
    </div>
    <div className='story-page'>
      <img src={handshake} alt='disco paw and justin shaking hands' />
    </div>
  </Layout>
)

export default TunesPage
