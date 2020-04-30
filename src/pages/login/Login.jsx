import React, { useState } from 'react';
import Axios from '../../config/api'
import './Login.css'

//Components
import Circle from '../../components/utils/Circle/Circle'
import Label from '../../components/utils/Label/Label'
import Button from '../../components/utils/Button/Button'

export default function Login({ history }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSumbit = async e => {
    e.preventDefault()

    if (!username || !password) {
      alert('Preencha todos os campos!') //API de Erro no Futuro!
      return
    }

    await Axios.post('/login', { username, password })
      .then(user => handleAuth(user.data))
      .catch(error => console.log(error.data)) //API de Erro no Futuro!
  }

  const handleAuth = user => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/home')
    } else {
      history.push('/')
    }
  }

  return (
    <div className='login-container'>
      <section className='login-box'>
        <h3>
          <Circle type='pictonBlue' min />
          <Circle type='orangeWeb' min />
          <Circle type='follyRed' min />
          <Circle type='mediumseaGreen' min />
          <p>Bem-Vindo ao 304 !</p>
        </h3>
        <form action="" onSubmit={handleSumbit}>
          <div className='login-box-container '>
            <div className="row">
              <Label title='Usuário' />
              <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Nome de Usuário" />
            </div>
            <div className="row">
              <Label title='Senha' />
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="************" />
            </div>
            <div className="row">
              <Button color='pictonBlue' type='submit' title='Entrar' />
            </div>
          </div>
          <p href='#' className='login-notaccount'><a href='/'>Ainda não possui conta no App?</a></p>
        </form>
      </section>

      <div className='errorlog'>
        Erro
      </div>
      <div className='toggletheme'>

      </div>
    </div>
  )
}
