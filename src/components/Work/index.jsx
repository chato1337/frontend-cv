import React from "react";
import "./work.css";
import data from "../../data.json";

const Work = () => {
	const { jobs } = data;
	return (
		<div className="Work content-item">
			<h3>{jobs.title}</h3>
			<div className="Work__content">
				{jobs.content.map((job) => (
					<React.Fragment key={job.title}>
						<div className="year">
							<strong>{job.year}</strong>
						</div>
						<div className="description">
							{job.content.map((item) => (
								<>
									<p>{item.title}</p>
									<strong>{item.company}</strong>
									<p>{item.description}</p>
								</>
							))}
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Work;
