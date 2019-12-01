
let timeouts = {};
const TIME_ONE_MIN = 60 * 1000;

export const doEveryMinute = (fn, id) => {
	if (typeof window !== 'undefined' && window.setInterval) {
		timeouts[id] = window.setInterval(() => fn(id), TIME_ONE_MIN);
	}
};

export const clearInterval = id => {
	if (timeouts[id] && typeof window !== 'undefined' && window.clearInterval) {
		window.clearInterval(timeouts[id]);
	}
};
