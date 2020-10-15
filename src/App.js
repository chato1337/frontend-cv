import React from "react";
import Main from "./pages/Main";
import { Header } from "./components/Header";
import "./App.css";

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
