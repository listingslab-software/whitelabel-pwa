import React, {
	// useEffect, 
	useState,
} from 'react'
import {
    makeStyles,
    CssBaseline,
    Button,
    Typography,
} from '@material-ui/core'

import { Icon } from './components'

import { AnimatedLogo } from './plugins/AnimatedSVG'

const useStyles = makeStyles(theme => ({
    screen:{
    	minWidth: '100vw',
    	minHeight: '100vh',
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
	const [identComplete, setIdentCompleted] = useState(true)
	const onIdentComplete = () => {
		setIdentCompleted(true)
	}
	if (!identComplete) return <AnimatedLogo options={{ onComplete: onIdentComplete }} />
	
	return (
	  <React.Fragment>
	  	<div className={classes.screen}>
	  		<CssBaseline />
	  		<Typography variant={`h6`}>
	  			Whitelabel PWA
	  		</Typography>

	  		<Button
	  			variant={`contained`}
	  			color={`primary`}
	  			onClick={(e) => {
	  				e.preventDefault()
	  			}}
	  		>
			  	<Icon icon={`mui`} color={`inherit`} /> 
			  	<span className={classes.btnTxt}>
			  		Install Material UI
			  	</span>
	  		</Button>

	  		<Button
	  			variant={`contained`}
	  			color={`secondary`}
	  			onClick={(e) => {
	  				e.preventDefault()
	  			}}
	  		>
			  	<Icon icon={`mui`} color={`inherit`} /> 
			  	<span className={classes.btnTxt}>
			  		Install Material UI
			  	</span>
	  		</Button>

	  	</div>
	  </React.Fragment>
	)

}























/*
	const [played, setPlayed] = useState(false)
	// console.log ('played', played)
	useEffect(() => {
		if (!played) console.log ('play.')
	    return () => {
	    	setPlayed(true)
	    }
	}, [props, played])
*/