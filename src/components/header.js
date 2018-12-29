import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import DiscopawLogo from '../images/discopawlogo.jpeg'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'


const Header = ({ siteTitle }) => (
  <div className='navbar'>

    <div className='sub-nav-top'>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={DiscopawLogo} alt='logo of disco paw' />
        </Link>
      </h1>

    </div>
    <div className='sub-nav-bot'>

      <div className='sub-nav-flex'>
        <div>
          <Link to='#'>The Story</Link>
        </div>
        <div>
          <Link to='/tunes'>The Tunes</Link>
        </div>
        <div>
          <Link to='/contact'>The Contact</Link>
        </div>
      </div>
      <div className='sub-nav-flex'>
        <div><a href='https://www.instagram.com/discopaw/'><FaInstagram /></a></div>
        <div><a href='https://www.youtube.com/channel/UCRg8-xEnajRkKGbFxg8beRw/featured' ><FaYoutube /></a></div>
        <div><a href='https://www.facebook.com/discopaw/' ><FaFacebook /></a></div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
