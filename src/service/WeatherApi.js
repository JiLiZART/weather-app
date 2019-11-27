import qs from 'query-string';
// process.env.API_KEY

// weather?q=London,uk&appid=3f6dbae327db9aade442178c52035923

export class WeatherApi {
	constructor({ apiKey, baseUri }) {
		this.apiKey = apiKey;
		this.baseUri = baseUri;
	}

	fetch({ uri, payload }) {
		return fetch(`${this.baseUri}${uri}?${qs.stringify({
			...payload,
			appid: this.apiKey
		})}`).then(res => res.json());
	}

	queryCitiesByIds({ ids = [] }) {
		return this.fetch({
			uri: 'group',
			payload: {
				units: 'metric',
				id: ids.join(',')
			}
		});
	}

	queryCity({ text }) {
		return this.fetch({
			uri: 'weather',
			payload: {
				q: text
			}
		});
	}
}

export default new WeatherApi({
	apiKey: '3f6dbae327db9aade442178c52035923',
	baseUri: 'https://api.openweathermap.org/data/2.5/'
});
