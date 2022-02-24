import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
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
		<Container fluid className="footer-container">
			<Row>
				<Col className="footer-col">
					<h3>By Marco Lagos</h3>
				</Col>
				<Col className="footer-col">
					<h3>
						{dateState} | {clockState}
					</h3>
				</Col>
				<Col className="footer-col">
					<ul className="footer-list">
						<li className="footer-icon">
							<a href="https://github.com/marcolagos" target="_blank">
								<AiFillGithub />
							</a>
						</li>
						<li className="footer-icon">
							<a href="https://www.linkedin.com/in/marcolagos" target="_blank">
								<FaLinkedinIn />
							</a>
						</li>
						<li className="footer-icon">
							<a href="https://www.instagram.com/marcollagoss/" target="_blank">
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
