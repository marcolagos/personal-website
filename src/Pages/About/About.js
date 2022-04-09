import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../../Components/Home/Type/Type";
import Particle from "../../Components/Other/Particle/Particle";

import { AiOutlineGithub } from "react-icons/ai";
import { FaGitAlt, FaNpm } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
	SiJava,
	SiPython,
	SiReact,
	SiMongodb,
	SiBootstrap,
	SiCss3,
	SiHtml5,
	SiAdobeillustrator,
	SiAdobexd,
	SiLatex,
} from "react-icons/si";

import AnimatedPage from "../../Components/Other/AnimatedPage/AnimatedPage";

const headerJSON = require("../../Data/About/about-header.json");
const bodyJSON = require("../../Data/About/about-body.json");

function About() {
	return (
		<AnimatedPage>
			<section className="about-section">
				<Container fluid className="about-container" id="about-container">
					<Container className="about-intro">
						<Row className="justify-content-center">
							<Col
								md={12}
								className="about-header about-intro-1"
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="0"
							>
								<h1 className="about-text">{headerJSON.introduction}</h1>
								<div className="type">
									<div className="about-subtitle">{headerJSON.name}</div>
								</div>
							</Col>
							<Col
								md={6}
								className="about-header-description about-intro-2"
								data-aos="fade-left"
								data-aos-duration="1000"
								data-aos-delay="0"
							>
								<div className="about-description-container">
									<div className="about-description">{bodyJSON.description}</div>
									<div className="about-skills">
										<div className="about-skill">
											<SiJava />
										</div>
										<div className="about-skill">
											<IoLogoJavascript />
										</div>
										<div className="about-skill">
											<SiPython />
										</div>
										<div className="about-skill">
											<SiHtml5 />
										</div>
										<div className="about-skill">
											<SiCss3 />
										</div>
										<div className="about-skill">
											<AiOutlineGithub />
										</div>
										<div className="about-skill">
											<FaGitAlt />
										</div>
										<div className="about-skill">
											<IoLogoNodejs />
										</div>
										<div className="about-skill">
											<FaNpm />
										</div>
										<div className="about-skill">
											<SiReact />
										</div>
										<div className="about-skill">
											<SiMongodb />
										</div>
										<div className="about-skill">
											<SiBootstrap />
										</div>
										<div className="about-skill">
											<SiAdobexd />
										</div>
										<div className="about-skill">
											<SiAdobeillustrator />
										</div>
										<div className="about-skill">
											<SiLatex />
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</Container>
			</section>
		</AnimatedPage>
	);
}

export default About;
