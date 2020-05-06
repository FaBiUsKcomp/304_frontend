import React from 'react';
import './Message.css'
import TriangleImg from '../../../static/img/triangle.svg'

function Message(props) {
  return (
    <div className={`message-line ${props.type}`}>
      <img src={TriangleImg} alt="icon" />
      <div className={`message-box message-${props.type}`}>
        <p className='message-username'>{props.user}</p>
        <p className='message-messagetext'>{props.messagetext}</p>
        <p className='message-hour'>{props.hour}</p>
      </div>
    </div>
  )
}

export default Message