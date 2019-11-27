export class Storage {
	constructor({ driver, key }) {
		this.driver = driver;
		this.key = key;
	}

	setData(data) {
		this.driver.setItem(this.key, JSON.stringify(data));
	}

	getData() {
		return this.driver.getItem(this.key);
	}
}

export default new Storage({ driver: window.localStorage, key: 'default' });
