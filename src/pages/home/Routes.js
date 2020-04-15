import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Money from '../../components/templates/Money/Money'
import Cleaning from '../../components/templates/Cleaning/Cleaning'
import Dispensation from '../../components/templates/Dispensation/Dispensation'
import Chat from '../../components/templates/Chat/Chat'
import Meme from '../../components/templates/Meme/Meme'

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/home' component={Money} />
      <Route exact path='/home/limpeza' component={Cleaning} />
      <Route exact path='/home/dispensa' component={Dispensation} />
      <Route exact path='/home/chat' component={Chat} />
      <Route exact path='/home/meme' component={Meme} />
      {/*<Route path='*' component={Money} />*/}
    </Switch>
  )
}

export default Routes