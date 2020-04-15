import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

import { 
  AttachMoneyRounded, 
  DateRangeRounded,
  AssessmentRounded,
  ChatRounded,
  TagFacesRounded
} from '@material-ui/icons'

export default function Nav(props) {

  const [tittle, setTittle] = useState('')

  const handleSign = (e) => {
    e.preventDefault()
    localStorage.clear()
    props.history.push('/')
  }

  return (
    <nav className='navbar-container'>
      <div className='navbar-tittle'>
        <Link to='/home' title='Inicio' onClick={e => setTittle('304 - Caixinha')}><h1 title='Atual'>{tittle || '304 - Caixinha'}</h1></Link>
      </div>
      <div className='navbar-links'>
        <Link to='/home' title='Caixinha' onClick={e => setTittle('304 - Caixinha')}>Caixinha <AttachMoneyRounded /></Link>
        <Link to='/home/limpeza' title='Limpeza' onClick={e => setTittle('304 - Limpeza')}>Limpeza <DateRangeRounded /></Link>
        <Link to='/home/dispensa' title='Dispensa' onClick={e => setTittle('304 - Dispensa')}>Dispensa <AssessmentRounded /></Link>
        <Link to='/home/chat' title='Chat' onClick={e => setTittle('304 - Chat')}>Chat <ChatRounded /></Link>
        {/*<Link to='/home/meme' title='Memes' onClick={e => setTittle('304 - Memes')}>Memes <TagFacesRounded /></Link>*/}
      </div>
      <div className='navbar-theme'>
        {`${JSON.parse(localStorage.getItem('user')).username}`}
        <button type='button' onClick={handleSign}>Sair</button>
      </div>
    </nav>
  )
}
