import React, { useState } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

const cardJSON = require("../../Data/Projects/projects-cards.json");
const headerJSON = require("../../Data/Projects/projects-header.json");

function Projects() {
	const cards = cardJSON.items.map((item, index) => {
		return (
			<Col md={4} className="project-card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
				<ProjectCard
					title={item.title}
					date={item.date}
					image={item.image}
					stack={item.stack}
					github={item.github}
					description={item.description}
					key={index}
				/>
			</Col>
		);
	});
	return (
		<section className="project-section">
			<Container fluid className="project-container">
				<Container className="project-intro">
					<h1 className="project-title" data-aos="fade-up" data-aos-duration="1500">
						{headerJSON.title}
					</h1>
					<p className="project-comment" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
						{headerJSON.comment}
						<a href="/contact" target="_blank" rel="noreferrer" className="dim-orange">
							{headerJSON.link}
						</a>
						!
					</p>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>{cards}</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Projects;
