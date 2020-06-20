import React, {useEffect} from 'react'
import { animateLogo } from './animate'
import {
	Logo512sq
} from './graphics/jsx'

export default function AnimatedLogo(props) {

	const {
		onComplete
	} = props.options

	useEffect(() => {
		// console.log ('AnimatedLogo', props)
		setTimeout(()=>{
			animateLogo(`fadeToWhite`, `#Logo512sq`, onComplete) 
		}, 333)
	    return () => {
	    	// console.log ('Cleanup AnimatedLogo')
	    }
	}, [onComplete])

	return (
	  <React.Fragment>
		 <div id={`Logo512sq`} className={`logo`}>
		 	<Logo512sq />
	  	</div>
	  </React.Fragment>
	)
}
