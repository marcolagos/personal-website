import React from "react";
import { Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const headerJSON = require("../../../Data/References/references-post-header.json");

function ReferencesHeader({ header }) {
	const getIcon = (title) => {
		if (title === "github") {
			return <AiFillGithub />;
		}
		if (title === "linkedin") {
			return <FaLinkedinIn />;
		}
		if (title === "instagram") {
			return <AiFillInstagram />;
		}
		if (title === "facebook") {
			return <AiFillFacebook />;
		}
	};

	const links = headerJSON.links.map((item, index) => {
		return (
			<a className="references-header-icon" href={item.to} target="_blank" rel="noreferrer" key={index}>
				{getIcon(item.title)}
			</a>
		);
	});

	return (
		<Container>
			<Row>
				<Col md="6" className="references-header-col">
					<Link className="references-header-link references-header-brand" to="/">
						{headerJSON.brand}
					</Link>
					<Link
						className="references-header-link references-header-back"
						to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}
					>
						{headerJSON.back}
					</Link>
				</Col>
				<Col md="6" className="references-header-col">
					<h3>
						{links}
						<div className="references-header-comment">Shoot me to the moon!</div>
					</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default ReferencesHeader;
