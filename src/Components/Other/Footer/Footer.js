import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

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
			<a href={item.to} target="_blank" rel="noreferrer" className="footer-icon" key={index}>
				{getIcon(item.title)}
			</a>
		);
	});

	if (!(useLocation().pathname.indexOf(REFERENCES_LINK) >= 0)) {
		return (
			<Container fluid className={"footer-container fixed-bottom"}>
				<Row>
					<Col md="4" className="footer-col footer-col-mark">
						<h3 className="footer-heading-mark">{footerJSON.mark}</h3>
					</Col>
					<Col md="4" className="footer-col-mid"></Col>
					<Col md="4" className="footer-col footer-col-links">
						<h3 className="footer-heading-links">{links}</h3>
					</Col>
				</Row>
			</Container>
		);
	} else {
		return null;
	}
}

export default Footer;
