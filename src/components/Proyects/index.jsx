import React from "react";
import "./proyects.css";
import data from "../../data.json";

const Proyects = () => {
	const { projects } = data
	return (
		<div className="content-item Proyects">
			<h3>{ projects.title }</h3>
			<div className="Proyects__items">
				{
					projects.content.map((proyect) => (
						<div key={proyect.name}>
							<strong>{proyect.name}</strong>
							<br />
							<i>{proyect.description}</i>
							<p>{proyect.role}</p>
							<p>{proyect.tech}</p>
							<a className="links" href={proyect.link}>
								{proyect.link}
							</a>
						</div>
					))
				}
			</div>
			<small>
				See my proyects in <a href={projects.git_address}>{projects.git_name}</a>
			</small>
		</div>
	);
};

export default Proyects;
