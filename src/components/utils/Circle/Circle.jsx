import React from 'react'
import './Circle.css'

export default props => 
    <div className={`circle${props.min ? 'min' : ''} ${props.type} ${props.margin}`}>
        
    </div>