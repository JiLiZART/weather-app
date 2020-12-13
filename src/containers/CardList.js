import { CardList } from '../components/cardList/CardList';
import React from 'react';
import NotFound from '../components/notFound/NotFound';

const CardListContainer = (props) => {
	if (props.items && props.items.length === 0 && !props.hasData) {
		return <NotFound state="primary" error={{ title: 'Empty', text: 'No Cards' }} />;
	}

	return <CardList {...props} />;
};

export default CardListContainer;
