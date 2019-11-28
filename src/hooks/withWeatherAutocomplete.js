import withWeatherFetch from './withWeatherFetch';
import { useState } from 'react';

export default function withWeatherAutocomplete() {
	const { findByName } = withWeatherFetch();
	const [data, setData] = useState({ items: [], isLoading: true, error: null });

	return {
		queryAutocomplete(text) {
			setData({
				...data,
				isLoading: true
			});

			findByName(text).then((item) => {
				if (!item.status) {
					setData({
						items: [],
						error: item.error,
						isLoading: false
					});
				} else {
					setData({
						items: [item],
						isLoading: false
					});
				}

			});
		},
		autocompleteItems: data.items,
		autocompleteError: data.error,
		isAutocompleteLoading: data.isLoading
	};
}
