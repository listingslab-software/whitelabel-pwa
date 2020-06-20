import React, {useEffect} from 'react'

import {
	Logo512sq
} from '../graphics'

export default function AnimatedLogo() {

	useEffect(() => {
	    
	    return () => {
	    	console.log ('cleanup')
	    }
	}, [])

	return (
	  <React.Fragment>
		  <div className={`logo`}>
		  	<Logo512sq />
	  	</div>
	  </React.Fragment>
	)
}
