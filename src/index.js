import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import { useState } from "react";

const initialState = {
	name: "Jack",
};

const reducer = (state = initialState, action) => {
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

const setName = (obj) => {
	return {
		type: "UPDATE_NAME",
		payload: obj,
	};
};

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: () => {}
);

const App = () => {
	const [inputName, setInputName] = useState("");
	const dispatch = useDispatch();

	const changeNAme = () => {
		if (inputName.length > 0) {
			dispatch(setName({ name: inputName }));
		}

		setInputName("");
	};

	const handleInput = (e) => {
		setInputName(e.target.value);
	};

	return (
		<>
			<input type="text" value={inputName} onChange={handleInput} />
			<button onClick={changeNAme}> Change Name</button>;
		</>
	);
};

const ViewName = () => {
	const storeName = useSelector((st) => st.name);

	return (
		<>
			<h1>{storeName}</h1>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
		<ViewName />
	</Provider>
);
