import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '../config/auth'

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={props => isAuthenticated() ? 
            (
                <Redirect
                    to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
) 