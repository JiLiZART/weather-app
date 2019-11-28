import withWeatherReducer from './withWeatherReducer';
import storage from '../service/Storage';

const state = storage.getData();


const defaultItems = {
	1: {
		id: 1,
		title: 'Moscow',
		temp: '32°C',
		weather: 'Broken clouds',
		humidity: '76%',
		pressure: '1026 hPa',
		wind: '3,4 m/s',
		icon: 'http://openweathermap.org/img/wn/09d@2x.png',
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

		},
		removeById: (id) => {
			remove({ id });
		},
		items,
	};
}
