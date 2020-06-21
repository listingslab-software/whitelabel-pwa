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
	ContentCard,
	Menu,
} from './components'

import { AnimatedLogo } from './plugins/AnimatedSVG'

const useStyles = makeStyles(theme => ({
    screen:{
    	minWidth: '99vw',
    	minHeight: '99vh',
    },
    content:{
    	marginTop: 65 + theme.spacing(),
    	marginBottom: 75 + theme.spacing(),
    },
    btnTxt: {
    	marginLeft: theme.spacing(),
    	marginRight: theme.spacing(),
    }
}))

const content = {
	title: `Home`,
	subheader: `Welcome to Whitelabel PWA`,
	avatar: `/logo192.png`,
	media: `/jpg/gherkin.jpg`,
	excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus orci non mauris lobortis, non hendrerit mi ultrices.`,
	body: `Nam tincidunt eros nec purus euismod luctus. Suspendisse non aliquam turpis. Phasellus consectetur aliquet mollis. Vestibulum tempus elit vitae pretium volutpat. Duis risus urna, eleifend eget lectus nec, commodo dignissim diam. Nunc fermentum pharetra egestas. Fusce ac ante at eros tempor pulvinar. Fusce cursus sem ac turpis tincidunt, vel placerat mauris posuere. Duis convallis arcu at velit ornare placerat. Duis accumsan id justo sit amet tempus. Suspendisse luctus et libero quis euismod. In a luctus metus, placerat laoreet massa. Suspendisse in vulputate enim. Mauris et arcu lacus.`,
	links: [
		{
			url:`/`,
			label: `Home`,
			title: `Home`,
			target: `_self`,
			icon: `home`,
		},
	],	
}

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
	  			<ContentCard options={{
	  				content
	  			}} />
	  		</div>
	  		<Menu />
	  	</div>
	  </React.Fragment>
	)

}
