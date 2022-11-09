import React from 'react'
import './styles/Header.scss';
import logo from '../../assets/img/logo-sochi-color.png'
import logoClaro from '../../assets/img/logo-claro-sports.png'

export default function Header() {
  return (
    <div className='header'>
        <div className='sochiLogo'>
            <img  src={logo} alt="Logo" />
        </div>
        <div className='claroLogo'>
            <img  src={logoClaro} alt="Logo" />
        </div>
    </div>
  )
}
