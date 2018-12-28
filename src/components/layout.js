import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
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
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
