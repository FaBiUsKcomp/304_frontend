import React from 'react';
import './Message.css'
import TriangleImg from '../../../static/img/triangle.svg'

function Message(props) {
  return (
    <div className={`message-box ${props.type}`}>
      <div className={`message-align ${props.type}`}>
        <img src={TriangleImg} alt="icon" />
        <div className={`message-container message-${props.type}`}>
          <p className='message-username'>{props.user}</p>
          <h3 className='message-messagetext'>{props.messagetext}</h3>
          <p className='message-hour'>{props.hour}</p>
        </div>
      </div>
    </div>
  )
}

export default Message