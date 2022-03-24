import React from "react";
import { Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const headerJSON = require("../../../Data/References/references-post-header.json");

function ReferencesHeader({ header }) {
	const getIcon = (title) => {
		if (title === "github") {
			return <AiFillGithub className="references-header-icon" />;
		}
		if (title === "linkedin") {
			return <FaLinkedinIn className="references-header-icon" />;
		}
		if (title === "instagram") {
			return <AiFillInstagram className="references-header-icon" />;
		}
		if (title === "facebook") {
			return <AiFillFacebook className="references-header-icon" />;
		}
	};

	const links = headerJSON.links.map((item, index) => {
		return (
			<h3 className={`footer-icons icon-${index + 1}`} key={index}>
				<a href={item.to} target="_blank" rel="noreferrer">
					{getIcon(item.title)}
				</a>
			</h3>
		);
	});

	return (
		<div className={header ? "references-header-container" : "references-header-container"}>
			<div className={header ? "references-header-item-1" : "references-header-item-1"}>
				<Link className={header ? "references-header-brand" : "references-header-brand"} to="/">
					{headerJSON.brand}
				</Link>
				<Link
					className={header ? "references-header-back" : "references-header-back"}
					to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}
				>
					{headerJSON.back}
				</Link>
			</div>
			<div className={header ? "references-header-item-2" : "references-header-item-2"}>{links}</div>
		</div>
	);
}

export default ReferencesHeader;
