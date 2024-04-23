import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../store/actions";


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

export default App;