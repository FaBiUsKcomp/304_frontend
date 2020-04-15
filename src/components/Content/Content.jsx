import React from 'react'
import './Content.css'

function Content(props) {
  return (
    <section className='content-container'>
      <div className='content-box'>
        {props.children}
      </div>
    </section>
  )
}

export default Content;