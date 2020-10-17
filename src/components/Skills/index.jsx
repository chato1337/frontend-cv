import React from "react";
import "./skills.scss";

const Skills = () => {
	return (
		<div className="Skills content-item">
			<h3>SKILLS</h3>
			<p className="Skills__title">Software Development:</p>
			<ul>
				<li>
					<strong>Javascript</strong>: ReactJS, Express, VueJS
				</li>
				<li>
					<strong>PHP</strong>: Laravel
				</li>
				<li>
					<strong>Database</strong>: MySql, PostgreSql, MongoDB
				</li>
				<li>
					<strong>Web Development</strong>: Html, Css, Sass, stylus,
					Styled-Components
				</li>
			</ul>
			<p className="Skills__title">Softskills:</p>
			<ul>
				<li>Team leadership</li>
				<li>Teamwork</li>
				<li>assertive communication</li>
			</ul>
		</div>
	);
};

export default Skills;
