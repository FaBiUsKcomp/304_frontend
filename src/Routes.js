import React from 'react';
import './App.css'

import { Switch, Route, useHistory } from 'react-router-dom'

import { PublicRoute } from './helpers/PublicRoute'
import { PrivateRoute } from './helpers/PrivateRoute'

import Login from './pages/login/Login'
import Home from './pages/home/Main'
import Page404 from './components/utils/PageNotFound/PageNotFound'

function Routes(props) {
  const history = useHistory()
  return (
    <Switch>
      <PublicRoute exact path='/' component={Login} />
      <PrivateRoute path='/home' component={Home} history={history} />
      <Route path='*' component={Page404} />
    </Switch>
  )
}

export default Routes