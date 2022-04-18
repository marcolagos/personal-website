import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt";
import { FaNpm } from "@react-icons/all-files/fa/FaNpm";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { GrNode } from "@react-icons/all-files/gr/GrNode";

import { SiJava } from "@react-icons/all-files/si/SiJava";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiAdobeillustrator } from "@react-icons/all-files/si/SiAdobeillustrator";
import { SiAdobexd } from "@react-icons/all-files/si/SiAdobexd";
import { SiLatex } from "@react-icons/all-files/si/SiLatex";

import AnimatedPage from "../Components/AnimatedPage";


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
								<h1 className="about-text">About Me</h1>
								<div className="type">
									<div className="about-subtitle">Marco Lagos</div>
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
									<div className="about-description">
										I am a second-year student at Rice University, studying for a BS in Computer
										Science. I would describe myself as diligent, candid, and skeptical. I am
										interested in Computer Science and Computer Programming and enjoy solving
										problems. In my free time, you can find me reading, solving puzzles, investing,
										exercising, teaching, and playing chess. My professional skillset includes:
									</div>
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
											<GrNode />
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
