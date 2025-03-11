import React, { useCallback, useEffect, useState } from "react";
import { getCollection } from "../../appwrite";
import "./skills.css";
import data from "../../data.json";

const Skills = () => {
	const { skills } = data

	return (
		<div className="Skills content-item">
			<h3>{ skills.title }</h3>
			<p className="Skills__title">Software Development:</p>
			<ul>
				{
					skills.content.map(skill => (
						<li key={skill.$id}>
							<strong>{skill.role}</strong>: {skill.stack}
						</li>
					))
				}
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
