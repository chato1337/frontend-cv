import React, { useState } from "react";
import Switch from "react-switch"
import PrintButton from "../components/PrintButton";

import "../styles/main.scss";

export default function Main({ children }) {
	const [mode, setMode] = useState(true);

	const handleChange = () => {
		setMode(!mode)
	}

	return (
		<div className={mode ? "Main" : "Main Dark"}>
			<div className="header-top">
				<PrintButton />
				<label className="no-print">
					<Switch
						onChange={() => handleChange()}
						checked={mode}
						onColor="#4c9aff"
						uncheckedIcon={
							<span
								style={{
									display: "flex",
									justifyContent: "center",
								}}
								role="img"
								aria-label="moon"
								className="no-print"
							>
								🌛
							</span>
						}
						checkedIcon={
							<span
								role="img"
								aria-label="sheep"
								style={{
									display: "flex",
									justifyContent: "center",
								}}
								className="no-print"
							>
								☀️
							</span>
						}
					/>
				</label>
			</div>
			{children}
		</div>
	);
}
