import React from "react";
import "./education.css";
import data from "../../data.json";

const Education = () => {
	const { education } = data

	return (
		<div className="Education content-item">
			<h3>{ education.title }</h3>
			<div className="Education__content">
				{
					education.content.map((study) => (
						<React.Fragment key={study.title}>
							<div className="year">
								<strong>{study.year}</strong>
							</div>
							<div className="description">
								<p>{study.title}</p>
								<strong>{study.school}</strong>
								<br />
								<small>
									{study.description}
								</small>
							</div>
						</React.Fragment>
					))
				}
			</div>
		</div>
	);
};

export default Education;
