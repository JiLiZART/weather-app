import qs from 'query-string';

export class WeatherApi {
	constructor({ apiKey, baseUri }) {
		this.apiKey = apiKey;
		this.baseUri = baseUri;
	}

	asUrl({ uri, payload }) {
		return `${this.baseUri}${uri}?${qs.stringify({
			...payload,
			appid: this.apiKey,
			units: 'metric'
		})}`;
	}

	fetch({ uri, payload }) {
		return fetch(this.asUrl({ uri, payload })).then(res => res.json());
	}

	queryCitiesByIds({ ids = [] }) {
		if (!ids.length) {
			return Promise.resolve([]);
		}

		return this.fetch({
			uri: 'group',
			payload: {
				units: 'metric',
				id: ids.join(',')
			}
		}).then(({ list }) => list.map(item => this.normalizeItem(item))).catch(err => console.warn(err));
	}

	queryCity({ text }) {
		return this.fetch({
			uri: 'weather',
			payload: {
				q: text
			}
		}).then(item => {
			if (item.cod === 200) {
				return this.normalizeItem(item);
			}

			return {
				status: false,
				error: true
			};
		}).catch(err => console.warn(err));
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
			icon: this.getIcon(item.weather[0].icon),
			meta: `${item.coord.lon}, ${item.coord.lat}`
		});
	}
}

export default new WeatherApi({
	apiKey: '3f6dbae327db9aade442178c52035923',
	baseUri: 'https://api.openweathermap.org/data/2.5/'
});
