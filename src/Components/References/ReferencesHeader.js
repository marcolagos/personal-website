import React from "react";
import { Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../Utils/Constants.Utils";

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ReferencesHeader() {
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

	const items = [
		{
			title: "github",
			to: "https://github.com/marcolagos",
		},
		{
			title: "linkedin",
			to: "https://www.linkedin.com/in/marcolagos",
		},
		{
			title: "instagram",
			to: "https://www.instagram.com/marcollagoss/",
		},
		{
			title: "facebook",
			to: "https://www.facebook.com/profile.php?id=100054551763304",
		},
	];

	const links = items.map((item, index) => {
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
						ml.
					</Link>
					<Link
						className="references-header-link references-header-back"
						to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}
					>
						References
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
