import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../../Components/Type/Type";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const headerJSON = require("../../Data/Home/home-header.json");
const aboutJSON = require("../../Data/Home/home-about.json");

function Home() {
	return (
		<section className="home-section">
			<Container fluid className="home-container">
				<Container className="home-intro">
					<Row>
						<Col md={12} className="home-header" data-aos="zoom-in" data-aos-duration="1500">
							<h1 className="home-text">{headerJSON.introduction}</h1>
							<div className="type">
								<Type words={headerJSON.words} />
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="home-about-container" id="home-about">
				<Container className="home-about-intro">
					<Row>
						<Col md={12} className="home-about-header">
							<h1
								className="home-about-title"
								data-aos="fade-left"
								data-aos-duration="1500"
								data-aos-delay="200"
							>
								{aboutJSON.introduction}
							</h1>
							<br />
							<br />
							<h4
								className="home-about-body"
								data-aos="fade-right"
								data-aos-duration="1500"
								data-aos-delay="300"
							>
								{aboutJSON.where}
								<br />
								<br />
								{aboutJSON.what}
								<br />
								<br />
								{aboutJSON.who}
							</h4>
						</Col>
					</Row>
					<Row>
						<Col md={12} className="home-icons-col" data-aos="fade-up" data-aos-duration="1500">
							<h2 className="home-icons-title">Reach Out!</h2>
							<ul className="home-icons">
								<li
									className="home-icon"
									data-aos="flip-left"
									data-aos-duration="750"
									data-aos-delay="200"
								>
									<a
										to="https://github.com/marcolagos"
										target="_blank"
										rel="noreferrer"
										className="icon-color home-icon-link"
									>
										<AiFillGithub />
									</a>
								</li>
								<li
									className="home-icon"
									data-aos="flip-left"
									data-aos-duration="750"
									data-aos-delay="400"
								>
									<a
										to="https://www.linkedin.com/in/marcolagos"
										target="_blank"
										rel="noreferrer"
										className="icon-color home-icon-link"
									>
										<FaLinkedinIn />
									</a>
								</li>
								<li
									className="home-icon"
									data-aos="flip-left"
									data-aos-duration="750"
									data-aos-delay="600"
								>
									<a
										to="https://www.instagram.com/marcollagoss/"
										target="_blank"
										rel="noreferrer"
										className="icon-color home-icon-link"
									>
										<AiFillInstagram />
									</a>
								</li>
								<li
									className="home-icon"
									data-aos="flip-left"
									data-aos-duration="750"
									data-aos-delay="800"
								>
									<a
										to="https://www.facebook.com/profile.php?id=100054551763304"
										target="_blank"
										rel="noreferrer"
										className="icon-color home-icon-link"
									>
										<AiFillFacebook />
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
