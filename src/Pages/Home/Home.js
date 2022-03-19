import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../../Components/Type/Type";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const headerJSON = require("../../Data/Home/home-header.json");

function Home() {
	return (
		<section className="home-section">
			<Container fluid className="home-container" id="home-container">
				<Container className="home-intro">
					<Row>
						<Col md={12} className="home-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
							<h1 className="home-text">{headerJSON.introduction}</h1>
							<div className="type">
								<Type words={headerJSON.words} />
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
