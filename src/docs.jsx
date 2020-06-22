
const docs = [
	{
		id: `listingslab-0000-1111122222333333`,
		data: {
			title: `Home`,
			// subheader: `Welcome to Whitelabel PWA`,
			avatar: `/svg/avatars/listingslab.svg`,
			media: `/jpg/gherkin.jpg`,
			excerpt: `Progressive Web Apps?`,
			body: `Progressive Web Apps are user experiences that have the reach of the web, and are:
			- Reliable
			- Fast
			- Respond quickly to user interactions with silky smooth animations and no janky scrolling
			- Engaging
			- Feel like a natural app on the device, with an immersive user experience
			This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.`,
			links: []
		}
	}
]

export const getDocById = id => {
	let doc = {
		title: `No content found`,
     	subheader: `Try searching?`,
      	avatar: `/logo192.png`,
     	links: [],
	}
	if (!id) return doc
	for (let i=0; i<docs.length; i++){
		if (id === docs[i].id) {
			doc = docs[i].data
		}
	}
	return doc
}

/*
				{
					url:`/next`,
					label: `Next`,
					title: `Next`,
					target: `_self`,
					icon: `next`,
				},
*/