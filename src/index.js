import ReactDOM from "react-dom/client";
import { Provider} from "react-redux";
import "./index.css";
import App from "./components/App";
import ViewName from "./components/ViewName";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
		<ViewName />
	</Provider>
);
