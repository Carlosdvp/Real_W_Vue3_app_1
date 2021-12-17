// import axios dependency

import axios from 'axios'

const apiClient = axios.create({
	baseURL:'https://my-json-server.typicode.com/Carlosdvp/Real_W_Vue3_app_1/real_w_vue_app_1/data',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json'
	}
})



// export the api client's method
export default {
	getEvents() {
		return apiClient.get('/events')
	}
}