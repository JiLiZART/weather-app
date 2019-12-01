import React from 'react';
import { Card } from '../card/Card';
import { List } from './cardListStyles';
import { useCallback } from 'preact/hooks';

export const CardList = ({ items, onItemRemove }) => {
	const onRemove = useCallback((item) => () => onItemRemove(item), []);

	return (
		<List>
			{items.map(item => <Card {...item} onRemove={onRemove(item)} />)}
		</List>
	);
};
