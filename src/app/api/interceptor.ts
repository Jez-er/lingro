import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: process.env.VITE_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

const $api = axios.create(options)

// You can use interceptors to modify requests and responses
$api.interceptors.request.use(
	config => {
		// You can modify the request config here
		return config
	},
	error => {
		// Handle request errors here
		return Promise.reject(error)
	}
)

export default $api
