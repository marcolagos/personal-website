import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
	return (
		<Container fluid className="footer-container fixed-bottom">
			<Row>
				<Col md="4" className="footer-col"></Col>
				<Col md="4" className="footer-col footer-col-icons">
					<h3 className="footer-icon icon-1">
						<Link to="https://github.com/marcolagos" target="_blank" rel="noreferrer">
							<AiFillGithub />
						</Link>
					</h3>
					<h3 className="footer-icon icon-2">
						<Link to="https://www.linkedin.com/in/marcolagos" target="_blank" rel="noreferrer">
							<FaLinkedinIn />
						</Link>
					</h3>
					<h3 className="footer-icon icon-3">
						<Link to="https://www.instagram.com/marcollagoss/" target="_blank" rel="noreferrer">
							<AiFillInstagram />
						</Link>
					</h3>
					<h3 className="footer-icon icon-4">
						<Link
							to="https://www.facebook.com/profile.php?id=100054551763304"
							target="_blank"
							rel="noreferrer"
						>
							<AiFillFacebook />
						</Link>
					</h3>
				</Col>
				<Col md="4" className="footer-col"></Col>
			</Row>
		</Container>
	);
}

export default Footer;
