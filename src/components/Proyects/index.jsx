import React from "react";
import "./proyects.scss";

const Proyects = () => {
	return (
		<div className="content-item Proyects">
			<h3>PROYECTS</h3>
			<div className="Proyects__items">
				<div>
					<strong>IdealBuy</strong>
					<br />
					<i>Smart buy app</i>
					<p>Frontend Developer</p>
					<p>React, PostgreSql, Django</p>
					<a className="links" href="https://idealbuy.vercel.app/">
						https://idealbuy.vercel.app/
					</a>
				</div>
				<div>
					<strong>Pandar</strong>
					<br />
					<i>Smart travel app</i>
					<p>Frontend Developer</p>
					<p>NextJS, MongoDB, ReactHooks</p>
					<a className="links" href="https://pandar.vercel.app/">
						https://pandar.vercel.app/
					</a>
				</div>
			</div>
			<small>
				See my proyects in <a href="#">Github</a>
			</small>
		</div>
	);
};

export default Proyects;
