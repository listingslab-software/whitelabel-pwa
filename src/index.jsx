import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatedLogo } from './components'
import * as serviceWorker from './serviceWorker'

console.log(`${pJSON.name} ${pJSON.version}`)

ReactDOM.render(
  <React.StrictMode>
    <AnimatedLogo />
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
