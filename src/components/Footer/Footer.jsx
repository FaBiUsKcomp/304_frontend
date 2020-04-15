import React from 'react'
import './Footer.css'

import { FavoriteRounded } from '@material-ui/icons'

function Footer(props) {
  return (
    <footer className='footer-container'>
      <h2><a href='https://github.com/FaBiUsKcomp' target='_blanck'>Construído com <FavoriteRounded style={{ fill: "#c0392b" }} /> por FaBiUsKcomp</a></h2>
    </footer>
  )
}

export default Footer;