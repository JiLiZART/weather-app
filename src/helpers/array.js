export const uniqIds = ids => ids.filter((id, i) => ids.indexOf(id) === i);

export const remove = (ids, id) => {
	const idx = ids.indexOf(id);

	if (idx >= 0) {
		ids.splice(idx, 1);
	}

	return [...ids];
};
