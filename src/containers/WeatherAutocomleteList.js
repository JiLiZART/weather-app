import React from 'react';
import memorize from 'fast-memoize';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import Menu from '../components/menu/Menu';
import Dropdown from '../components/dropdown/Dropdown';
import Icon from '../components/icon/Icon';
import Loader from '../components/loader/Loader';
import NotFound from '../components/notFound/NotFound';

const onClickHandler = memorize((props, index, item) => props.onItemClick({ index, item }));

const AutocompleteMenu = compose(
	branch(
		props => props.isLoading,
		renderComponent(Loader)
	),
	branch(
		props => props.data && props.data.length === 0,
		renderComponent(({ error }) => <NotFound title={error} />)
	)
)(Menu);

const renderItem = ({ item, index, isActive, props }) =>
	(
		<Menu.Item
			{...item}
			key={index}
			Action={<Icon.Add />}
			isActive={isActive}
			onClick={onClickHandler(props, index, item)}
		/>
	);

const WeatherAutocomleteList = ({ data, error, activeIndex, onItemClick, isLoading }) => (
	<Dropdown>
		<AutocompleteMenu
			isLoading={isLoading}
			onItemClick={onItemClick}
			items={data}
			error={error}
			activeIndex={activeIndex}
			renderItem={renderItem}
		/>
	</Dropdown>
);

export default WeatherAutocomleteList;
