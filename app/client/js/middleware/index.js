const promiseMiddleware = store => next => action => {
	console.log(action);
	if (isPromise(action.payload)) {
		action.payload.then(
			res => {
				console.log(res);
				action.payload = res;
				store.dispatch(action);
			},
			error => {
				console.log(error);
				action.error = true;
				action.payload = error.response;
				store.dispatch(action);
			}
		);

		return;
	}

	next(action);
};

function isPromise(v) {
	return v && typeof v.then === 'function';
}

export { promiseMiddleware };