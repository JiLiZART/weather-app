import React, { useCallback } from 'react';
import Card from '../card/Card';
import { List } from './cardListStyles';
import { useTransition, config } from 'react-spring';

function getScale(value) {
	return `scale(${value}, ${value ** 2})`;
}

export const CardList = ({ items, onItemRemove }) => {
	const onRemove = useCallback((item) => () => onItemRemove(item), []);

	const transitions = useTransition(items, item => item, {
		// ref: transRef,
		unique: true,
		trail: 400 / items.length,
		config: config.wobbly,
		keys: items.map((item, index) => index),
		from: { opacity: 0, transform: getScale(0.75) },
		enter: { opacity: 1, transform: getScale(1) },
		leave: { opacity: 0, transform: getScale(0.5) }
	});

	return (
		<List>
			{transitions.map(({ item, key, props }) => (
				<Card {...item}
					  key={key} style={{ ...props }}
					  onRemove={onRemove(item)}
				/>
			))}
		</List>
	);
};
