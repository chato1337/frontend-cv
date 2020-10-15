import React from "react";
import Main from "./pages/Main";
import { Header } from "./components/Header";
import "./styles/vars.scss";
import "./styles/styles.scss";

function App() {
	return (
		<div className="App">
			<Main>
				<Header />
			</Main>
		</div>
	);
}

export default App;
