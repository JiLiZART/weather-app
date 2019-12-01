import { useEffect, useCallback } from 'react';
import withWeatherReducer from './withWeatherReducer';
import withWeatherFetch from './withWeatherFetch';
import withWeatherStorage from './withWeatherStorage';
import { doEveryMinute, clearInterval } from '../helpers/interval';

export default function withWeatherList() {
	const { items, add, remove } = withWeatherReducer({ items: [], ids: [] });
	const { findByIds } = withWeatherFetch();
	const { storedIds, storeId, clearStoredId } = withWeatherStorage();

	const addByIds = ids => findByIds(ids).then(items => {
		items.forEach(value => add(value));
	});

	const addToList = useCallback((item) => {
		const id = item.id;

		doEveryMinute((id) => {
			addByIds([id]);
		}, id);

		storeId(id);
		add(item);
	}, []);

	useEffect(() => {
		addByIds(storedIds || []);
	}, []);

	return {
		add: addToList,
		removeById: (id) => {
			remove({ id });
			clearInterval(id);
			clearStoredId(id);
		},
		items
	};
}
