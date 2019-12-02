import React, { useCallback } from 'react';
import { Global } from '@emotion/core';
import WeatherAutocomleteList from '../containers/WeatherAutocomleteList';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Logo from '../components/logo/Logo';
import Hero from '../components/hero/Hero';
import SearchInput from './SearchInput';
import withWeatherList from '../hooks/withWeatherList';
import globalStyles from '../components/globalStyles';
import withWeatherAutocomplete from '../hooks/withWeatherAutocomplete';
import CardList from './CardList';

const renderAutocomplete = ({ index, data, error, value, onSetIndex, isLoading }) =>
	(
		<WeatherAutocomleteList
			onItemClick={onSetIndex}
			value={value}
			data={data}
			error={error}
			activeIndex={index}
			isLoading={isLoading}
		/>
	);

const App = () => {
	const { add, items, removeById } = withWeatherList();
	const {
		queryAutocomplete, clearAutocomplete, autocompleteItems, isAutocompleteLoading, autocompleteError
	} = withWeatherAutocomplete();

	const onAutocompleteChange = useCallback(({ item }) => {
		add(item);
		clearAutocomplete();
	}, []);

	const onItemRemove = useCallback((item) => {
		removeById(item.id);
	}, []);

	return (
		<Layout>
			<Global
				styles={globalStyles}
			/>
			<Header>
				<Logo/>
			</Header>
			<Hero title="Weather forecast"
				  description="Simple but powerful weather forcasting service based on OpenWeatherMap API"
				  Actions={
					  <SearchInput
						  autofocus
						  placeholder="Search"
						  data={autocompleteItems}
						  error={autocompleteError}
						  isLoading={isAutocompleteLoading}
						  renderAutocomplete={renderAutocomplete}
						  onChange={queryAutocomplete}
						  onAutocompleteChange={onAutocompleteChange}
					  />
				  }
			/>
			<CardList items={items} onItemRemove={onItemRemove}/>
		</Layout>
	);
};

export default App;
