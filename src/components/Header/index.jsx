import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdGpsFixed } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./header.scss";

export const Header = () => {
	return (
		<div className="Header">
			<div className="Header__name">
				<h1>DIDIER CUETIA</h1>
				<p>FULLSTACK SOFTWARE DEVELOPER</p>
			</div>
			<div className="Header__image">
				<img src="https://chatuz.site/v1/storage/buckets/64a0ddb0a9b7b8ff5d63/files/64a0eb934471505fd138/view?project=649f9bb69d447d142974&mode=admin" alt="Didider Cuetia" />
			</div>
			<div className="Header__info">
				<div className="Header__info-item">
					<div className="header-icon">
						<FiPhoneIncoming />
					</div>
					<a className="links" href="tel:+573242800880">
						<p>+57 3242800880</p>
					</a>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<BsWhatsapp />
					</div>
					<a className="links" href="https://wa.me/573127330437" target="_blank" rel="noopener noreferrer">
						<p>+57 3127330437</p>
					</a>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<HiOutlineMail />
					</div>
					<a className="links" href="mailto:chato1337@gmail.com">
						<p>chato1337@gmail.com</p>
					</a>
				</div>
				<div className="Header__info-item">
					<div className="header-icon">
						<MdGpsFixed />
					</div>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/Ft6HCHnuWuFDsfvK9">
						<p><span role="img" aria-label="col flag">🇨🇴 </span>Corinto - Cauca</p>
					</a>
				</div>
			</div>
		</div>
	);
};
