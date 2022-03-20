import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";

const footerJSON = require("../../../Data/Other/footer.json");

function Footer() {
	const getIcon = (title) => {
		if (title === "github") {
			return <AiFillGithub className="footer-icon" />;
		}
		if (title === "linkedin") {
			return <FaLinkedinIn className="footer-icon" />;
		}
		if (title === "instagram") {
			return <AiFillInstagram className="footer-icon" />;
		}
		if (title === "facebook") {
			return <AiFillFacebook className="footer-icon" />;
		}
	};

	const links = footerJSON.links.map((item, index) => {
		return (
			<h3 className={`footer-icons icon-${index + 1}`} key={index}>
				<a href={item.to} target="_blank" rel="noreferrer">
					{getIcon(item.title)}
				</a>
			</h3>
		);
	});

	if (!(useLocation().pathname.indexOf(REFERENCES_LINK) >= 0)) {
		return (
			<Container fluid className="footer-container fixed-bottom">
				<Row>
					<Col md="4" className="footer-col footer-mark">
						{footerJSON.mark}
					</Col>
					<Col md="4" className="footer-col"></Col>
					<Col md="4" className="footer-col">
						{links}
					</Col>
				</Row>
			</Container>
		);
	} else {
		return null;
	}
}

export default Footer;
