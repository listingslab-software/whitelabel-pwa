import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import App from './App'
import { 
	MuiThemeProvider, 
	createMuiTheme 
} from '@material-ui/core/'
import theme from './theme/'
import * as serviceWorker from './serviceWorker'

console.log(`${pJSON.name} ${pJSON.version}`)

WebFont.load({
  google: {
    families: ['Noto+Sans+JP', 'sans-serif']
  }
})

ReactDOM.render(
  <React.StrictMode>
  	<MuiThemeProvider theme={createMuiTheme(theme)}>
	    <App options={{
	    	optionZero: `nuffin`,
	    }} />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
