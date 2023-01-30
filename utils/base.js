const API_URL = process.env.NEXT_PUBLIC_API_URL;
// console.log(API_URL, "API_URL");
import axios from "axios";
let base = {};

base.http_post = async (request) => {
	try {
		let url = API_URL + request.url;
		let body = request.body;
		// console.log(request,'request');
		let header = {};
		if (request.token) {
			header = {
				headers: {
					authorization: `Bearer ${request.token}`,
				},
			};
		}
		const { data } = await axios.post(url, body, header);

		return data;
	} catch (error) {
		return error;
	}
};

base.http_put = async (request) => {
	try {
		let url = API_URL + request.url;
		let body = request.body;
		// console.log(request,'request');
		let header = {};
		if (request.token) {
			header = {
				headers: {
					authorization: `Bearer ${request.token}`,
				},
			};
		}
		const { data } = await axios.put(url, body, header);

		return data;
	} catch (error) {
		return error;
	}
};

base.http_get = async (request) => {
	try {
		let url = API_URL + request.url;

		let header = {};
		if (request.token) {
			header = {
				headers: {
					authorization: `Bearer ${request.token}`,
				},
			};
		}

		const { data } = await axios.get(url, header);

		return data;
	} catch (error) {
		return error;
	}
};

module.exports = base;
