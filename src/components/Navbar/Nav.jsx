import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

import Circle from '../utils/Circle/Circle'
import Arrowdrop from '../../static/img/arrowdrop.svg';

export default function Nav(props) {

  const handleSign = (e) => {
    e.preventDefault()
    localStorage.clear()
    props.history.push('/')
  }

  return (
    <nav className='navbar-container'>
      <div className='navbar-tittle'>
        <div className='navbar-tittle-box'>
          <Link to='/home' title='Inicio'><h1 title='Atual'>304</h1></Link>
        </div>
      </div>
      <div className='navbar-links'>
        <NavLink exact={true} activeClassName='is-active-pictonBlue' to='/home' title='Caixinha'><Circle type="pictonBlue" margin="mright" />Caixinha</NavLink>
        <NavLink activeClassName='is-active-orangeWeb' to='/home/limpeza' title='Limpeza'><Circle type="orangeWeb" margin="mright" />Limpeza</NavLink>
        <NavLink activeClassName='is-active-follyRed' to='/home/dispensa' title='Dispensa'><Circle type="follyRed" margin="mright" />Dispensa</NavLink>
        <NavLink activeClassName='is-active-mediumseaGreen e' to='/home/chat' title='Chat'><Circle type="mediumseaGreen" margin="mright" />Chat</NavLink>
      </div>
      <div className='navbar-userstatus'>
        <div className='navbar-userstatus-box'>
          <div className='navbar-userstatus-pic'>

          </div>
          <div className='navbar-userstatus-username'>
            <p>{`${JSON.parse(localStorage.getItem('user')).username}`}</p>
          </div>
          <div className='navbar-userstatus-username'>
            <button type='button' onClick={handleSign}><img src={Arrowdrop} alt="Opções" /></button>
          </div>
        </div>
      </div>
    </nav>
  )
}
