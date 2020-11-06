import React from "react";
import "./skills.scss";

const Skills = () => {
	return (
		<div className="Skills content-item">
			<h3>SKILLS</h3>
			<p className="Skills__title">Software Development:</p>
			<ul>
				<li>
					<strong>Javascript</strong>: ReactJS, VueJS, Angular, Express
				</li>
				<li>
					<strong>Database</strong>: MySql, PostgreSql, MongoDB
				</li>
				<li>
					<strong>Web Development</strong>: Html, Css, Sass, Stylus, Less
				</li>
				<li>
					<strong>DevOps</strong>: Jenkins, AWS Cloud & storge
				</li>
				<li>
					<strong>O.S</strong>: MAC OSX, Linux, Windows
				</li>
			</ul>
			<p className="Skills__title">Softskills:</p>
			<ul>
				<li>Team leadership</li>
				<li>Teamwork</li>
				<li>Assertive communication</li>
			</ul>
		</div>
	);
};

export default Skills;
