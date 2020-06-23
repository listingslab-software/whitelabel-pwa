import axios from 'axios'
import { 
	getStore,
} from '../../../'

export const getIpgeo = () => {
	// const api = `https://us-central1-listingslab-production.cloudfunctions.net/api`
	const api = `http://localhost:1975/listingslab-production/us-central1/api`
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/IPGEOING`, ipgeoing: true })
	axios
		.get(`${api}/ipgeo`)
			.then(function(res) { 
				console.log (res.data.response.data)
				store.dispatch({ type: `PUSHTOTALK/IPGEO`, ipgeo: res.data.response })
			})
			.catch(function(error) {
				console.log ('error', error)
				store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
			})
			.finally(function() {
				store.dispatch({ type: `PUSHTOTALK/IPGEO_DONE`, ipgeoDone: true })
				store.dispatch({ type: `PUSHTOTALK/IPGEOING`, ipgeoing: true })
			})
}
