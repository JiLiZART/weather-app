import React from 'react';
import { Global } from '@emotion/core';
import WeatherAutocomleteList from '../containers/WeatherAutocomleteList';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Logo from '../components/logo/Logo';
import Hero from '../components/hero/Hero';
import SearchInput from './SearchInput';
import { CardList } from '../components/cardList/CardList';
import withWeather from '../hooks/withWeather';
import memoize from 'fast-memoize';
import globalStyles from '../components/globalStyles';
import withWeatherAutocomplete from '../hooks/withWeatherAutocomplete';

const renderAutocomplete = ({ index, data, error, value, onSetIndex, isLoading }) => value &&
	<WeatherAutocomleteList
		onItemClick={onSetIndex}
		data={data}
		error={error}
		activeIndex={index}
		isLoading={isLoading}
	/>;

export default () => {
	const { addByName, items, removeById } = withWeather();
	const { queryAutocomplete, autocompleteItems, isAutocompleteLoading, autocompleteError } = withWeatherAutocomplete();

	const onAutocompleteChange = memoize(() => {
	});

	const onItemRemove = memoize((item) => removeById(item.id));

	return (
		<Layout>
			<Global
				styles={globalStyles}
			/>
			<Header>
				<Logo />
			</Header>
			<Hero title="Weather forecast"
				  description="Simple but powerful weather forcasting service based on OpenWeatherMap API"
				  Actions={<SearchInput
					  data={autocompleteItems}
					  error={autocompleteError}
					isLoading={isAutocompleteLoading}
					renderAutocomplete={renderAutocomplete}
					onChange={queryAutocomplete}
					onAutocompleteChange={onAutocompleteChange}
				           />}
			/>
			<CardList items={items} onItemRemove={onItemRemove} />
		</Layout>
	);
};
