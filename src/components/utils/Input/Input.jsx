import React from 'react'
import './Input.css'

export default props =>
    <input type={props.type} 
    className={`inputdefault inputcolor-${props.color} 
    ${props.half ? 'inputlimit' : ''} ${props.halfextends ? 'inputlimitextends' : ''}`} 
    placeholder={props.placeholder} />