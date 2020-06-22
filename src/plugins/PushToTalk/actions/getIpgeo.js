import axios from 'axios'
import { 
	getStore,
} from '../../../'

export const getIpgeo = () => {
	// const api = `https://us-central1-listingslab-production.cloudfunctions.net/api`
	const api = `http://localhost:1975/listingslab-production/us-central1/api`
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/IPGEOING`, ipgeoing: false })
	axios
		.get(`${api}/ipgeo`)
			.then(function(res) {
				const { data } = res.data
				console.log (res.data.response)
				// store.dispatch({ type: `PUSHTOTALK/IPGEO`, ipgeo: data })
			})
			.catch(function(error) {
				store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
			})
			.finally(function() {
				store.dispatch({ type: `PUSHTOTALK/IPGEOING`, ipgeoing: false })
			})
}
