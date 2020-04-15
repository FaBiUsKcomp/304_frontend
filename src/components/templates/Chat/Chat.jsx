import React from 'react';
import { SendRounded } from '@material-ui/icons'
import './Chat.css'

import Content from '../../Content/Content'
import Message from './Message'
import Loader from '../../utils/Loader/Loader'

import Online from '../../../static/img/online.png'
import Offline from '../../../static/img/offline.png'

import Axios from '../../../config/api'
import io from 'socket.io-client'

const defaultState = {
  usersMsg: [],
  currentMsg: '',
  userstatusmessage: '',
  userstatusimg: '',
  userstatus: false,
  isLoading: true
}

const socket = io('http://localhost:4000/chat')

class Chat extends React.Component {

  state = { ...defaultState }

  constructor(props) {
    super(props)
    this.handleMessage = this.handleMessage.bind(this)
  }

  async componentDidMount() {
    await this.getAllMessages()
    this.setState({ isLoading: false })

    socket.emit('userconnect', `${JSON.parse(localStorage.getItem('user')).username} está online!`)
    socket.on('userconnect', message => this.setUserStatusLog(message, 'connect'))
    socket.on('userdisconnected', message => this.setUserStatusLog(message, 'disconnect'))

    socket.on('chatmessage', message => {
      this.createMyMsg(message, 'other')
    })
  }

  componentWillUnmount() {
    socket.emit('userdisconnected', `${JSON.parse(localStorage.getItem('user')).username} está offline!`)
  }

  createMyMsg(message, identify) {
    const currentMessages = this.state.usersMsg
    currentMessages.push(
      {
        type: identify,
        username: message.username,
        messagetext: message.messagetext,
        hour: message.hour
      }
    )
    this.setState({ usersMsg: currentMessages })
  }

  async handleMessage(e) {
    e.preventDefault()

    if (this.state.currentMsg === '') {
      alert('Digite uma mensagem!')
      return
    }

    const username = JSON.parse(localStorage.getItem('user')).username
    const messagetext = this.state.currentMsg
    const hour = this.getCurrentHourAndDate()
    const message = { username, messagetext, hour }

    this.createMyMsg(message, 'my')
    this.setState({ currentMsg: '' })

    await Axios.post('/chat', message)
      .then(socket.emit('chatmessage', message))
      .catch(error => alert(`Erro ao enviar mensagens ${error}`))
  }

  async getAllMessages() {
    await Axios.get('/chat')
      .then(messages => {
        this.setState({ usersMsg: messages.data })
      })
      .catch(error => alert(`Erro ao carregar mensagens ${error}`))
  }

  getCurrentHourAndDate() {
    const date = new Date()
    const hour = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
    const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return `${today} - ${hour}`
  }

  setUserStatusLog(message, status) {
    this.setState(
      {
        userstatus: true,
        userstatusmessage: message,
        userstatusimg: status === 'connect' ? Online : Offline,
      }
    )

    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(function () {
      if (this.state.userstatus) {
        this.setState({ userstatus: false });
      }
      this.timer = null;
    }.bind(this), 3000);
  }

  render() {
    return (
      <Content>
        {
          this.state.isLoading ? <Loader /> :
            <aside className='chat-box'>
              <div className='chat-container'>
                <div className='displaychat-box'>
                  {
                    this.state.usersMsg.map((msg, key) => {
                      return (
                        <Message
                          key={key}
                          type={msg.username === JSON.parse(localStorage.getItem('user')).username ? 'my' : 'other'}
                          user={msg.username === JSON.parse(localStorage.getItem('user')).username ? 'Você' : msg.username}
                          messagetext={msg.messagetext}
                          hour={msg.hour}
                        />
                      )
                    })
                  }
                </div>
                <div className='inputchat-box'>
                  <input type="text" name="" id=""
                    placeholder='Digite uma mensagem...'
                    value={this.state.currentMsg}
                    onChange={e => this.setState({ currentMsg: e.target.value })} />
                  <button type='button' onClick={this.handleMessage}><SendRounded /></button>
                </div>
              </div>
              {
                this.state.userstatus ?
                  <div className='users-status'>
                    <div className='users-status-container'>
                      <img src={this.state.userstatusimg} alt='Online' />
                      <p>{this.state.userstatusmessage}</p>
                    </div>
                  </div>
                  :
                  null
              }
            </aside>
        }
      </Content>
    );
  }
}

export default Chat