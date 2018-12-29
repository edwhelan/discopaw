import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`discopaw`, `music`, `disco`, `paw`]} />
    <div className='video-holder'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IVDGQ7JoEc8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <ContactForm />
  </Layout>
)

export default IndexPage
