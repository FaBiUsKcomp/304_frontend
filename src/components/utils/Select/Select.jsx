import React from 'react'
import './Select.css'

export default props => 
    <select className={`selectdefault selectcolor-${props.color} ${props.half ? 'selectlimit' : ''}`} id={props.id}>
        {props.children}
    </select>