export const createReducer = actions => (state, action) =>
	actions[action.type] ? actions[action.type](state, action.payload) : state;

export const createAction = type => payload => ({ type, payload });
