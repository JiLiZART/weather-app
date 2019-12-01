import withWeatherFetch from './withWeatherFetch';
import { useState } from 'react';

export default function withWeatherAutocomplete() {
	const { findByName } = withWeatherFetch();
	const [data, setData] = useState({ items: [], isLoading: true, error: null });

	const queryAutocomplete = text => {
		setData({
			...data,
			isLoading: true
		});

		if (text) {
			findByName(text).then((item) => {
				if (!item.status) {
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
						items: [item],
						error: null,
						isLoading: false
					});
				}
			});
		}
	};

	return {
		queryAutocomplete,
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
