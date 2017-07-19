const defaultState = {
	appName: 'snappyshare',
	links: null
};

const reducer = function(state = defaultState, action) {
	switch (action.type) {
		case 'HOME_PAGE_LOADED':
			return { ...state, links: action.payload.links };
		default:
			return state;
	}
};

export { reducer };