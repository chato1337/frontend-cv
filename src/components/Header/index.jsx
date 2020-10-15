import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdGpsFixed } from "react-icons/md";
import "./header.scss";

export const Header = () => {
	return (
		<div className="Header">
			<div className="Header__name">
				<h1>DIDIER CUETIA</h1>
				<p>FULLSTACK WEB DEVELOPER</p>
			</div>
			<div className="Header__image">
				<img
					src="https://ikwesx.com/wp-content/uploads/2020/08/IMG_20190704_114637_179.jpg"
					alt="profile image"
				/>
			</div>
			<div className="Header__info">
				<div className="Header__info-item">
					<div className="header-icon">
						<FiPhoneIncoming />
					</div>
					<p>+57 3127330437</p>
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
					<p>🇨🇴 Corinto - Cauca</p>
				</div>
			</div>
		</div>
	);
};
