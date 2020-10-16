import React from "react";
import Main from "./pages/Main";
import { Header } from "./components/Header";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Language from "./components/Language";
import "./styles/vars.scss";
import "./styles/styles.scss";

function App() {
	return (
		<div className="App">
			<Main>
				<Header />
				<div className="Content">
					<div className="Content__item divider">
						<About />
						<Work />
					</div>
					<div className="Content__item">
						<Skills />
						<Education />
						<Language />
					</div>
				</div>
			</Main>
		</div>
	);
}

export default App;
