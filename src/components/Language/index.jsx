import React from "react";
import Circle from "react-circle";
import "./language.scss";

const Language = () => {
	return (
		<div className="Language content-item">
			<h3>LANGUAGE</h3>
			<div className="Language__content">
				<div className="Language__item">
					<small>Spanish (native)</small>
					<Circle progress={100} />
				</div>
				<div className="Language__item">
					<small>English</small>
					<Circle progress={65} />
				</div>
			</div>
		</div>
	);
};

export default Language;
