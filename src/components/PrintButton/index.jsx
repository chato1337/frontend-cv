import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import "./printButton.scss";

const PrintButton = () => {
	return (
		<div className="Print-button">
			<button
				onClick={() => {
					window.print();
				}}
			>
				Print CV <AiFillPrinter />
			</button>
		</div>
	);
};

export default PrintButton;
