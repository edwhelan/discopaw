import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import storyImage from '../images/story.jpg'

const StoryPage = () => (
  <Layout>
    <SEO title="Story" />
    <div className='story-page'>
      <img src={storyImage} alt='text over brick background' />
    </div>
  </Layout>
)

export default StoryPage
