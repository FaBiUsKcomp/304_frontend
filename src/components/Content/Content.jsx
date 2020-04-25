import React from 'react'
import './Content.css'

function Content(props) {
  return (
    <section className='content-container'>
        {props.children}
    </section>
  )
}

export default Content;