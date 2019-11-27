import React from 'react';
import memorize from 'fast-memoize';
import Menu from '../components/menu/Menu';
import Dropdown from '../components/dropdown/Dropdown';
import Icon from '../components/icon/Icon';

const onClickHandler = memorize((props, index, item) => props.onItemClick({ index, item }));

const renderItem = ({ item, index, isActive, props }) =>
	(
		<Menu.Item  {...item}
			key={index}
			Action={<Icon.Add />} isActive={isActive}
			onClick={onClickHandler(props, index, item)}
		/>
	);

const WeatherAutocomleteList = ({ data, activeIndex, onItemClick }) => (
	<Dropdown>
		<Menu
			onItemClick={onItemClick}
			items={data}
			activeIndex={activeIndex}
			renderItem={renderItem}
		/>
	</Dropdown>
);

export default WeatherAutocomleteList;
