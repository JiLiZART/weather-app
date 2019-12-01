import storage from '../service/Storage';
import { remove, uniqIds } from '../helpers/array';

export default function withWeatherStorage() {
	const storedIds = storage.getIds();

	return {
		storedIds,
		storeId(id) {
			storage.setIds(uniqIds([...storedIds, id]));
		},
		clearStoredId(id) {
			storage.setIds(remove(storage.getIds(), id));
		}
	};
}
