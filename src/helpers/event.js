export const preventedEvent = callback => e => {
	const nativeEvent = e.nativeEvent || e;
	nativeEvent.preventDefault();
	callback(nativeEvent);
};

export const createExecuteMap = ({ map, key, props }) => {
	map[key] && map[key](...props);
};
