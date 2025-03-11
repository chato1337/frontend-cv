import React from "react";
import Circle from "react-circle";
import "./language.css";
import data from "../../data.json";

const Language = () => {
	const { language } = data

	return (
		<div className="Language content-item">
			<h3>{ language.title }</h3>
			<div className="Language__content">
				{
					language.content.map((lang) => (
						<div className="Language__item" key={lang.title}>
							<small>{lang.title}</small>
							<Circle progress={lang.level} />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default Language;
