import React from 'react'
import ReactDOM from 'react-dom'

import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain={'https://whai-2022-ben.au.auth0.com'}
      clientId={'7nRiBOTHlD7zfUKju9YPkpQKIVTCvFvQ'}
      redirectUri={window.location.origin}
      audience="https://kai/api"
    >
      <App />
    </Auth0Provider>,
    document.getElementById('app')
  )
})
