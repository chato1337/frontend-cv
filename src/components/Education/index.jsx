import React from "react";
import "./education.scss";

const Education = () => {
	return (
		<div className="Education content-item">
			<h3>EDUCATION</h3>
			<div className="Education__content">
				<div className="year">
					<strong>2023</strong>
				</div>
				<div className="description">
					<p>
						systems engineering <small>(on curse)</small>
					</p>

					<strong>UNAD</strong>
				</div>
				<div className="year">
					<strong>2020</strong>
				</div>
				<div className="description">
					<p>Fullstack Javascript developer</p>
					<strong>PLATZI MASTERS</strong>
					<br />
					<small>
						high performance program focused on enhancing skills for the
						technology sector
					</small>
				</div>

				<div className="year">
					<strong>2017</strong>
				</div>
				<div className="description">
					<p>computer architecture</p>

					<strong>SENA</strong>
				</div>
				<div className="year">
					<strong>2016</strong>
				</div>
				<div className="description">
					<p>system technique</p>

					<strong>ITGEM</strong>
				</div>
			</div>
		</div>
	);
};

export default Education;
