import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../../Components/Type/Type";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const header = () => {
	return (
		<Container fluid className="home-container">
			<Container className="home-intro">
				<Row>
					<Col md={12} className="home-header" data-aos="zoom-in" data-aos-duration="1500">
						<h1 className="home-text">Hello, I'm Marco Lagos</h1>
						<div className="type">
							<Type />
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

const about = () => {
	return (
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
							About <span className="orange">Me</span>
						</h1>
						<br />
						<br />
						<h4
							className="home-about-body"
							data-aos="fade-right"
							data-aos-duration="1500"
							data-aos-delay="300"
						>
							I grew up in New Orleans, Louisiana, and graduated from Jesuit High School.
							<br />
							Currently, I am a second-year student attending{" "}
							<span className="orange">Rice University</span>, Houston, studying for a{" "}
							<span className="orange">B.S. in Computer Science</span>.
							<br />
							<br />I am most proficient in
							<span className="orange"> Java</span>, <span className="orange"> Javascript</span>, and
							<span className="orange"> Python</span>. Currently, I spend my time researching
							<span className="orange"> CS related topics</span>,
							<span className="orange"> solving CP problems</span>, and building web applications using
							<span className="orange"> MERN</span> stack.
							<br />
							<br />I would describe myself as diligent, candid, and skeptical. I am interested in
							Computer Science and Computer Programming and enjoy solving problems. In my free time, I
							find myself reading, solving puzzles, investing, exercising, teaching, and playing chess.
						</h4>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-icons-col" data-aos="fade-up" data-aos-duration="1500">
						<h2 className="home-icons-title">Reach Out!</h2>
						<ul className="home-icons">
							<li className="home-icon" data-aos="flip-left" data-aos-duration="750" data-aos-delay="200">
								<a
									to="https://github.com/marcolagos"
									target="_blank"
									rel="noreferrer"
									className="icon-color home-icon-link"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="home-icon" data-aos="flip-left" data-aos-duration="750" data-aos-delay="400">
								<a
									to="https://www.linkedin.com/in/marcolagos"
									target="_blank"
									rel="noreferrer"
									className="icon-color home-icon-link"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="home-icon" data-aos="flip-left" data-aos-duration="750" data-aos-delay="600">
								<a
									to="https://www.instagram.com/marcollagoss/"
									target="_blank"
									rel="noreferrer"
									className="icon-color home-icon-link"
								>
									<AiFillInstagram />
								</a>
							</li>
							<li className="home-icon" data-aos="flip-left" data-aos-duration="750" data-aos-delay="800">
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
	);
};

function Home() {
	return (
		<section className="home-section">
			{header()}
			{about()}
		</section>
	);
}

export default Home;
