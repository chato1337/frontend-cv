import React, { useState } from "react";
import "../styles/main.scss";

export default function Main({ children }) {
	const [mode, setMode] = useState(true);

	return (
		<div className={mode ? "Main" : "Main Dark"}>
			{/* <button
				onClick={() => {
					if (mode) {
						setMode(false);
					} else {
						setMode(true);
					}
				}}
			>
				test darkmode
			</button> */}
			{children}
		</div>
	);
}
