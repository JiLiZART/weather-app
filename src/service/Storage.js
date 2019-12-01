export class Storage {
	constructor({ driver, key }) {
		this.driver = driver;
		this.key = key;
	}

	setIds(data = []) {
		this.driver.setItem(this.key, JSON.stringify(data));
	}

	getIds() {
		return JSON.parse(this.driver.getItem(this.key) || false) || [];
	}
}

export default new Storage({ driver: window.localStorage, key: 'weather_ids' });
