import React from "react";
import "./about.css";
import data from "../../data.json"

export const About = () => {
	const { about } = data
	return (
		<div className="About content-item">
			<h3>{ about.title }</h3>
			<p>
				{ about.content }
			</p>
		</div>
	);
};
