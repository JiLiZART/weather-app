import React from 'react';
import Menu from '../components/menu/Menu';
import Dropdown from '../components/dropdown/Dropdown';
import Icon from '../components/icon/Icon';
import Loader from '../components/loader/Loader';
import NotFound from '../components/notFound/NotFound';

const AutocompleteMenu = (props) => {
	if (!props.value) {
		return null;
	}

	if (props.error) {
		return <NotFound {...props} />;
	}

	if (props.isLoading) {
		return <Loader {...props} />;
	}

	return <Menu {...props} />;
};

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

const WeatherAutocomleteList = ({ data, error, value, activeIndex, onItemClick, isLoading }) => {
	if (value) {
		return (
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
	}

	return null;
};

export default WeatherAutocomleteList;
