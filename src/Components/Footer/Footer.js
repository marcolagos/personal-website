import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	return (
		<Container fluid className="footer-container fixed-bottom">
			<Row>
				<Col md="4" className="footer-col"></Col>
				<Col md="4" className="footer-col"></Col>
				<Col md="4" className="footer-col">
					<h3 className="footer-icons icon-1">
						<a href="https://github.com/marcolagos" target="_blank" rel="noreferrer">
							<AiFillGithub className="footer-icon" />
						</a>
					</h3>
					<h3 className="footer-icons icon-2">
						<a href="https://www.linkedin.com/in/marcolagos" target="_blank" rel="noreferrer">
							<FaLinkedinIn className="footer-icon" />
						</a>
					</h3>
					<h3 className="footer-icons icon-3">
						<a href="https://www.instagram.com/marcollagoss/" target="_blank" rel="noreferrer">
							<AiFillInstagram className="footer-icon" />
						</a>
					</h3>
					<h3 className="footer-icons icon-4">
						<a
							href="https://www.facebook.com/profile.php?id=100054551763304"
							target="_blank"
							rel="noreferrer"
						>
							<AiFillFacebook className="footer-icon" />
						</a>
					</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
