import React from "react";
import "./work.scss";

const Work = () => {
	return (
		<div className="Work content-item">
			<h3>WORK EXPERIENCE</h3>
			<div className="Work__content">
				<div className="year">
					<strong>2021</strong>
				</div>
				<div className="description">
					<p>JR Software Develeper</p>
					<strong>Appspring - Colombia</strong>
					<p>Develop software solutions in back and front technologies</p>
				</div>
				<div className="year">
					<strong>2020</strong>
				</div>
				<div className="description">
					<p>computer consultant</p>
					<strong>CRIC - Colombia</strong>
					<p>
						advise the construction of a project with the national government
					</p>
				</div>
				<div className="year">
					<strong>2019</strong>
				</div>
				<div className="description">
					<p>Teacher</p>
					<strong>Education Institutional Carrizales</strong>
					<p>High school teacher in the area of computer science</p>
				</div>
				{/* <div className="year">
					<strong>2017</strong>
				</div>
				<div className="description">
					<p>Data Manager</p>
					<strong>ICBF</strong>
					<p>
						Data manager of the information system CUENTAME of the ICBF for
						operator of the agreement.
					</p>
				</div> */}
			</div>
		</div>
	);
};

export default Work;
