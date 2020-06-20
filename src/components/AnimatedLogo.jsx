import React, {useEffect} from 'react'

export default function AnimatedLogo() {

	useEffect(() => {
	    
	    return () => {
	    	console.log ('cleanup')
	    }
	}, [])

	return (
	  <React.Fragment>
	  	AnimatedLogo
	  </React.Fragment>
	)
}
