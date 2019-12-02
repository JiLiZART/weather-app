import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import renderNothing from 'recompose/renderNothing';
import Menu from '../components/menu/Menu';
import Dropdown from '../components/dropdown/Dropdown';
import Icon from '../components/icon/Icon';
import Loader from '../components/loader/Loader';
import NotFound from '../components/notFound/NotFound';

const AutocompleteMenu = compose(
	branch(
		props => !props.value,
		renderNothing,
	),
	branch(
		props => props.isLoading,
		renderComponent(Loader)
	),
	branch(
		props => props.error,
		renderComponent(NotFound)
	)
)(Menu);

const renderItem = ({ item, index, isActive, props }) =>
	(
		<Menu.Item
			{...item}
			key={index}
			Action={<Icon.Add />}
			isActive={isActive}
			onClick={() => props.onItemClick({ index, item })}
		/>
	);

const WeatherAutocomleteList = ({ data, error, value, activeIndex, onItemClick, isLoading }) => (
	<Dropdown>
		<AutocompleteMenu
			isLoading={isLoading}
			onItemClick={onItemClick}
			items={data}
			error={error}
			value={value}
			activeIndex={activeIndex}
			renderItem={renderItem}
		/>
	</Dropdown>
);

export default WeatherAutocomleteList;
