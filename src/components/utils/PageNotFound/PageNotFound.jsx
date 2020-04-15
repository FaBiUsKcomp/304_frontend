import React from 'react'
import './PageNotFound.css'
import NotFoundImg from '../../../static/img/pagenotfound.svg'

import { Link } from 'react-router-dom'
import { RefreshRounded } from '@material-ui/icons'

function PageNotFound(props) {
  return (
    <aside className='pagenotfound-content'>
      <div className='pagenotfound-box'>
        <img src={NotFoundImg} alt='Erro' />
        <div className='pagenotfoundtext'>
          <h3>A página não foi encontrada!</h3>
          <Link to='/'>Voltar para o Início <RefreshRounded /></Link>
        </div>
      </div>
    </aside>
  )
}

export default PageNotFound