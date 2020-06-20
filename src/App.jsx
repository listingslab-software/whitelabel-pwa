import React, {
	// useEffect, 
	useState,
} from 'react'

import { AnimatedLogo } from './plugins/AnimatedSVG'

export default function App(props) {

	const [identComplete, setIdentCompleted] = useState(false)

	const onIdentComplete = () => {
		// console.log ('onLogoAnimationComplete')
		setIdentCompleted(true)
	}

	let { options } = props
	if (!options) options = {}
	if (!identComplete) return <AnimatedLogo options={{ onComplete: onIdentComplete }} />
	return (
	  <React.Fragment>
	  	App Shell
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