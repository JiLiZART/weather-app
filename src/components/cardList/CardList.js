import React, { useCallback } from 'react';
import { Card } from '../card/Card';
import { List } from './cardListStyles';

export const CardList = ({ items, onItemRemove }) => {
	const onRemove = useCallback((item) => () => onItemRemove(item), []);

	return (
		<List>
			{items.map(item => <Card {...item} onRemove={onRemove(item)} />)}
		</List>
	);
};
