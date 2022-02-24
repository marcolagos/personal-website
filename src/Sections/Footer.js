import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	const [clockState, setClockState] = useState();
	const [dateState, setDateState] = useState();
	useEffect(() => {
		setInterval(() => {
			const clock = new Date();
			setClockState(clock.toLocaleTimeString());
			setDateState(clock.toLocaleDateString());
		}, 1000);
	}, []);
	return (
		<Container fluid className="footer-container fixed-bottom">
			<Row>
				<Col md="4" className="footer-col">
					{/* <h3>
						{dateState}
					</h3> */}
				</Col>
				<Col md="4" className="footer-col footer-col-icons">
					<h3 className="footer-icon icon-1">
						<a href="https://github.com/marcolagos" target="_blank">
							<AiFillGithub />
						</a>
					</h3>
					<h3 className="footer-icon icon-2">
						<a href="https://www.linkedin.com/in/marcolagos" target="_blank">
							<FaLinkedinIn />
						</a>
					</h3>
					<h3 className="footer-icon icon-3">
						<a href="https://www.instagram.com/marcollagoss/" target="_blank">
							<AiFillInstagram />
						</a>
					</h3>
					<h3 className="footer-icon icon-4">
						<a href="https://www.facebook.com/profile.php?id=100054551763304" target="_blank">
							<AiFillFacebook />
						</a>
					</h3>
				</Col>
				<Col md="4" className="footer-col">
					{/* <h3>By Marco Lagos</h3> */}
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
