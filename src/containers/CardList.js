import { CardList } from '../components/cardList/CardList';
import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import NotFound from '../components/notFound/NotFound';

export default compose(
	branch(
		props => props.items && props.items.length === 0,
		renderComponent(() => <NotFound error={{ title: 'No cards added', text: 'Add One' }}/>)
	)
)(CardList);
