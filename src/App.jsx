import React, {
	// useEffect, 
	useState,
} from 'react'
import {
    makeStyles,
    CssBaseline,
} from '@material-ui/core'
import {
	TopAppbar,
	LoremIpsum,
	Menu,
} from './components'

import { AnimatedLogo } from './plugins/AnimatedSVG'

const useStyles = makeStyles(theme => ({
    screen:{
    	minWidth: '100vw',
    	minHeight: '100vh',
    },
    content:{
    	marginTop: 65 + theme.spacing(),
    },
    btnTxt: {
    	marginLeft: theme.spacing(),
    	marginRight: theme.spacing(),
    }
}))


export default function App(props) {
	let { options } = props
	if (!options) options = {}
	const classes = useStyles()

	const [identComplete, setIdentCompleted] = useState(false)
	const onIdentComplete = () => {
		setIdentCompleted(true)
	}
	if (!identComplete) return <AnimatedLogo options={{ onComplete: onIdentComplete }} />
	
	return (
	  <React.Fragment>
	  	<div className={classes.screen}>
	  		<CssBaseline />
	  		<TopAppbar />
	  		<div className={classes.content}>
	  			<LoremIpsum />
	  		</div>
	  		<Menu />
	  	</div>
	  </React.Fragment>
	)

}
