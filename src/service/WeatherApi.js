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
			appid: this.apiKey,
			units: 'metric'
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
		}).then(item => {
			if (item.cod === '200') {
				return this.normalizeItem(item);
			}

			return {
				status: false,
				error: { title: `City called “${text}” was not found`, text: 'Try different city name' }
			};
		});
	}

	getIcon(name) {
		return `http://openweathermap.org/img/wn/${name}@2x.png`;
	}

	normalizeItem(item) {
		return ({
			status: parseInt(item.cod, 10),
			id: item.id,
			title: item.name,
			temp: `${item.main.temp}°C`,
			weather: item.weather[0].description,
			humidity: `${item.main.humidity}%`,
			pressure: `${item.main.pressure} hPa`,
			wind: `${item.wind.speed} m/s`,
			icon: this.getIcon(item.weather[0]),
			meta: `${item.coord.lon}, ${item.coord.lat}`
		});
	}
}

export default new WeatherApi({
	apiKey: '3f6dbae327db9aade442178c52035923',
	baseUri: 'https://api.openweathermap.org/data/2.5/'
});
