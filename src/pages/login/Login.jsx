import React, { useState } from 'react';
import Axios from '../../config/api'
import './Login.css'

export default function Login({ history }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSumbit = async e => {
    e.preventDefault()
    
    if(!username || !password) {
      alert('Preencha todos os campos!') //API de Erro no Futuro!
      return
    }

    await Axios.post('/login', { username, password })
      .then(user => handleAuth(user.data))
      .catch(error => console.log(error.data)) //API de Erro no Futuro!
  }

  const handleAuth = user => {
    if(user) {
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/home')
    } else {
      history.push('/')
    }
  }

  return (
    <div className='login-container'>
      <section className='login-box'>
        <form action="" onSubmit={handleSumbit}>
          <h3>Welcome</h3>
          <div className='row-login-field'>
            <label>Usuário</label>
            <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Nome de Usuário" />
          </div>
          <div className='row-login-field'>
            <label>Senha</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="************" />
          </div>
          <div className='row-login-btn'>
            <button type="submit">Enviar</button>
          </div>
          <div className='row-notaccount'>
            <p>É membro novo no App?</p>
          </div>
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
