import withWeatherFetch from './withWeatherFetch';
import { useState } from 'react';
import debounce from '../helpers/debounce';

export default function withWeatherAutocomplete() {
	const { findByName } = withWeatherFetch();
	const [data, setData] = useState({ items: [], isLoading: true, error: null });

	const queryText = text => findByName(text).then(({ status, data }) => {
		if (!status || !data.length) {
			setData({
				items: [],
				error: {
					title: `City called “${text}” was not found`,
					text: 'Try different city name'
				},
				isLoading: false
			});
		}
		else {
			setData({
				items: data,
				error: null,
				isLoading: false
			});
		}
	});

	return {
		queryAutocomplete: debounce(text => {
			setData({
				...data,
				isLoading: true
			});

			if (text) {
				queryText(text);
			}
		}, 500),
		clearAutocomplete() {
			setData({
				items: [],
				error: null,
				isLoading: true
			});
		},
		autocompleteItems: data.items,
		autocompleteError: data.error,
		isAutocompleteLoading: data.isLoading
	};
}
