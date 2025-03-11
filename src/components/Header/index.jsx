import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdGpsFixed } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./header.css";
import data from "../../data.json"
import photoCV from "../../assets/img/profile.jpeg";

export const Header = () => {
	const { profile } = data
	return (
		<div className="Header">
			<div className="Header__name">
				<h1>{ profile.fullname }</h1>
				<p>{ profile.role }</p>
			</div>
			<div className="Header__image">
			<img src={photoCV} alt="profile image" />
			</div>
			<div className="Header__info">
				<div className="Header__info-item">
					<div className="header-icon">
						<FiPhoneIncoming />
					</div>
					<a className="links" href="tel:+573242800880">
						<p>{ profile.phone1 }</p>
					</a>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<BsWhatsapp />
					</div>
					<a className="links" href="https://wa.me/573127330437" target="_blank" rel="noopener noreferrer">
						<p>{ profile.phone2 }</p>
					</a>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<HiOutlineMail />
					</div>
					<a className="links" href="mailto:chato1337@gmail.com">
						<p>{ profile.email }</p>
					</a>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<MdGpsFixed />
					</div>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/Ft6HCHnuWuFDsfvK9">
						<p><span role="img" aria-label="col flag">🇨🇴 </span>{ profile.address }</p>
					</a>
				</div>
			</div>
		</div>
	);
};
