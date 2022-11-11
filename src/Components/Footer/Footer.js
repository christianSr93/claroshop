import React from 'react'
import logo from '../../assets/img/logo-sochi-color.png'
import mobli from '../../assets/img/mobli-icon.png'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/youtube.png'
import youtube from '../../assets/img/twitter.png'

import './styles/Footer.scss'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='privacy'>
          <span>Aviso de privacidad / Contacto</span>
      </div>
      <div className='logo'>
          <img  src={logo} alt="Logo" />
      </div>
      <div className='socialMedia'>
          <img src={mobli} alt="Logo" />
          <img src={twitter} alt="Logo" />
          <img src={facebook} alt="Logo" />
          <img src={youtube} alt="Logo" />
      </div>
    </div>
  )
}
