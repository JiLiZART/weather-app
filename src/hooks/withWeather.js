import withWeatherReducer from './withWeatherReducer';
import storage from '../service/Storage';
import api from '../service/WeatherApi';

const state = storage.getData();

const normalizeItem = item => ({ ...item });

const defaultItems = {
	1: {
		id: 1,
		title: 'London, GB',
		meta: '37.129, -84.0833'
	},
	2: {
		id: 2,
		title: 'London, US',
		meta: '37.129, -84.0833'
	}
};

export default function withWeather() {
	const { items, add, remove } = withWeatherReducer({ ...state, items: defaultItems, ids: [1, 2] });

	return {
		addByName: (text) => {
			api.queryCity({ text }).then(item => {
				add({
					...normalizeItem(item),
					created: Date.now()
				});
			});
		},
		removeById: (id) => {
			remove({ id });
		},
		items,
	};
}
