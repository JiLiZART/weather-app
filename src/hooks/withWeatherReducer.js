import { useReducer } from 'react';
import { createAction, createReducer } from '../helpers/redux';
import { remove, uniqIds } from '../helpers/array';

const ACTION_NAME_REMOVE = 'action:remove';
const ACTION_NAME_ADD = 'action:add';

const addAction = createAction(ACTION_NAME_ADD);
const removeAction = createAction(ACTION_NAME_REMOVE);

const reducer = createReducer({
	[ACTION_NAME_ADD]: (state, payload) => (
		{
			...state,
			ids: uniqIds([...state.ids, payload.id]),
			items: {
				...state.items,
				[payload.id]: payload
			}
		}
	),
	[ACTION_NAME_REMOVE]: (state, payload) => {
		const { ids } = state;

		return ({
			...state,
			ids: remove(ids, payload.id)
		});
	}
});

export default function withWeatherReducer({ items = {}, ids = [] }) {
	const [state, dispatch] = useReducer(reducer, { items, ids });

	return {
		add: (item) => dispatch(addAction(item)),
		remove: (item) => dispatch(removeAction(item)),
		items: state.ids.map(id => state.items[id])
	};
}
