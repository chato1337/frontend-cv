import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdGpsFixed } from "react-icons/md";
import photoCV from "../../assets/img/profile.jpeg";
import "./header.scss";

export const Header = () => {
	return (
		<div className="Header">
			<div className="Header__name">
				<h1>DIDIER CUETIA</h1>
				<p>FULLSTACK WEB DEVELOPER</p>
			</div>
			<div className="Header__image">
				<img src={photoCV} alt="Didider Cuetia" />
			</div>
			<div className="Header__info">
				<div className="Header__info-item">
					<div className="header-icon">
						<FiPhoneIncoming />
					</div>
					<p>+57 3127330437 - +57 3242800880</p>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<HiOutlineMail />
					</div>
					<p>chato1337@gmail.com</p>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<MdGpsFixed />
					</div>
					<p>
						<span role="img" aria-label="col flag">🇨🇴 </span>
						Corinto - Cauca
					</p>
				</div>
			</div>
		</div>
	);
};
