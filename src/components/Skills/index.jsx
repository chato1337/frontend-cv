import React, { useCallback, useEffect, useState } from "react";
import { getCollection } from "../../appwrite";
import "./skills.scss";

const Skills = () => {
	const [skills, setSkills] = useState([])

	const getSkills = useCallback(async () => {
		const id = process.env.REACT_APP_SKILLS ?? null
		if (id) {
			const data = await getCollection(id)
			if ('documents' in data && data.documents.length > 0) {
				setSkills(data.documents)
			}
		}
	}, [])

	useEffect(() => {
		getSkills()
	}, [getSkills])

	return (
		<div className="Skills content-item">
			<h3>SKILLS</h3>
			<p className="Skills__title">Software Development:</p>
			<ul>
				{
					skills.map(skill => (
						<li>
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
