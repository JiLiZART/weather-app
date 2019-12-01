// import { useState, useEffect } from 'react';
import api from '../service/WeatherApi';

export default function withWeatherFetch() {
	return {
		findByName(text) {
			return api.queryCity({ text });
		},
		findByIds(ids) {
			return api.queryCitiesByIds({ ids });
		}
	};
}
