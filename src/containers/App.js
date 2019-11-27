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
	/* latin */
	@font-face {
	  font-family: 'PT Root UI';
	  font-style: normal;
	  font-weight: normal;
	  src:
		local('PT Root UI'),
		local('PTRootUI'),
		url(assets/fonts/PTRootUIRegular.woff2) format('woff2'),
		url(assets/fonts/PTRootUIRegular.woff) format('woff');
	  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
	  font-display: swap;
	}
	/* latin */
	@font-face {
	  font-family: 'Merriweather';
	  font-style: normal;
	  font-weight: normal;
	  src:
		local('Merriweather'),
		url(assets/fonts/Merriweather-Regular.woff2) format('woff2'),
		url(assets/fonts/Merriweather-Regular.woff) format('woff');
	  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
	  font-display: swap;
	}

	body {
		min-height: 100%;
		margin: 0;
		background: ${colorGray300};
	}
`;

const renderAutocomplete = ({ index, data, onSetIndex }) =>
	<WeatherAutocomleteList onItemClick={onSetIndex} data={data} activeIndex={index} />

export default () => {
	const { addByName, items, removeById } = withWeather();

	const onSearchChange = memoize(({ item, index }) => {
		addByName(item.title);
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
