import React, { Component } from 'react';
import './Main.css'

import { BrowserRouter } from 'react-router-dom'

import Navbar from '../../components/Navbar/Nav'
import Routes from './Routes'
import Footer from '../../components/Footer/Footer'

export default class main extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className='main-container'>
          <Navbar {...this.props} />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
