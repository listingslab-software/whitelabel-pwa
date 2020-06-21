
export const config = (options) => {
	console.log ( 'config', options )

	const getContentById = id => {
		if (!id) return null
		let content = {
			adsld:123
		}
		return content
	}

	const content = [
		{
			id: `00001111122222333333`,
			data: {
				title: `Home`,
				subheader: `Welcome to Whitelabel PWA`,
				avatar: `/svg/avatars/home.svg`,
				media: `/jpg/gherkin.jpg`,
				excerpt: `What are Progressive Web Apps?`,
				body: `Progressive Web Apps are user experiences that have the reach of the web, and are:

				- Reliable
				- Fast
				- Respond quickly to user interactions with silky smooth animations and no janky scrolling
				- Engaging
				- Feel like a natural app on the device, with an immersive user experience

				This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.`,

				links: [
					{
						url:`/next`,
						label: `Next`,
						title: `Next`,
						target: `_self`,
						icon: `next`,
					},
				]
			}
		}
	]

}