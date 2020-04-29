import React from 'react'
import './Label.css'

export default props => 
    <label className={`labeldefault labelcolor-${props.color}`}
    htmlFor={props.htfor || ''}>{props.title}</label>