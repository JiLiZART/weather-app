import storage from '../service/Storage';
import { remove, uniqIds } from '../helpers/array';

export default function withWeatherStorage() {
	return {
		storedIds: storage.getIds(),
		storeId(id) {
			storage.setIds(uniqIds([...storage.getIds(), id]));
		},
		clearStoredId(id) {
			storage.setIds(remove(storage.getIds(), id));
		}
	};
}
