const initialState = {
	name: "Jack",
};

const nameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_NAME": {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};


export default nameReducer;