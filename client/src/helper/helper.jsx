import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN
/** Make API Requests */

/** Upload function */
export async function UploadToDB(file) {
	try {
		if (file) {
			const { data } = await axios.post('/api/upload', file, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			return Promise.resolve({ data })
		}
	} catch (error) {
		return Promise.reject({ error: 'Invalid file type.' })
	}
}

/** Get file data */
export async function FetchProducts() {
	try {
		const {data} = await axios.get('/api/products')
		return Promise.resolve({data})
	} catch (error) {
		return Promise.reject({error: 'Internal Server Error'})
	}
}