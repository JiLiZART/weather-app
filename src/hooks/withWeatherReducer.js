import { useReducer } from 'react';

const ACTION_NAME_REMOVE = 'action:remove';
const ACTION_NAME_ADD = 'action:add';

const createReducer = actions => (state, action) =>
	actions[action.type] ? actions[action.type](state, action.payload) : state;

const createAction = type => payload => ({ type, payload });

const uniqIds = (ids) => ids.filter((id, i) => ids.indexOf(id) === i);

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

		const idx = ids.indexOf(payload.id);

		if (idx >= 0) {
			ids.splice(idx, 1);
		}

		return ({
			...state,
			ids: [...ids]
		});
	}
});

const addAction = createAction(ACTION_NAME_ADD);
const removeAction = createAction(ACTION_NAME_REMOVE);

export default function withWeatherReducer({ items = {}, ids = [] }) {
	const [state, dispatch] = useReducer(reducer, { items, ids });

	return {
		add: (item) => dispatch(addAction(item)),
		remove: (item) => dispatch(removeAction(item)),
		items: state.ids.map(id => state.items[id])
	};
}
