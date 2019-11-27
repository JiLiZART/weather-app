import React from 'react';
import { Global, css } from '@emotion/core';

// Code-splitting is automated for routes
import WeatherAutocomleteList from '../containers/WeatherAutocomleteList';
import { colorGray300 } from '../components/variables';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Logo from '../components/logo/Logo';
import Hero from '../components/hero/Hero';
import SearchInput from './SearchInput';
import { CardList } from '../components/cardList/CardList';
import withWeather from '../hooks/withWeather';
import memoize from 'fast-memoize';

const styles = css`
	body {
		background: ${colorGray300};
	}
`;

const renderAutocomplete = ({ index, data, onSetIndex }) =>
	<WeatherAutocomleteList onItemClick={onSetIndex} data={data} activeIndex={index}/>;

export default () => {
	const { addByName, items, removeById } = withWeather();

	const onSearchChange = memoize(({ item, index }) => {
		addByName(item.title)
	});

	const onItemRemove = memoize((item) => removeById(item));

	return (
		<Layout>
			<Global
				styles={styles}
			/>
			<Header>
				<Logo />
			</Header>
			<Hero title="Weather forecast"
				  description="Simple but powerful weather forcasting service based on OpenWeatherMap API"
				  Actions={<SearchInput data={items} renderAutocomplete={renderAutocomplete} onChange={onSearchChange} />}
			/>
			<CardList items={items} onItemRemove={onItemRemove} />
		</Layout>
	);
};
