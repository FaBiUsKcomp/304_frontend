import React from 'react'
import './Button.css'

export default props => <button className={`btndefault btncolor-${props.color}`} type={props.type} onClick={props.onClick}>{props.title}</button>