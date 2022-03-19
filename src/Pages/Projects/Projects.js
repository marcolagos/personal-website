import React, { useState } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

const cardJSON = require("../../Data/Projects/projects-cards.json");
const headerJSON = require("../../Data/Projects/projects-header.json");

function Projects() {
	const cards = cardJSON.items.map((item, index) => {
		return (
			<Col md={4} className="projects-card">
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
		<section className="projects-section">
			<Container fluid className="projects-container">
				<Container className="projects-intro">
					<div className="projects-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
						<h1 className="projects-title">{headerJSON.title}</h1>
						<p className="projects-comment">
							{headerJSON.comment}
							<a href="/contact" target="_blank" rel="noreferrer" className="dim-orange">
								{headerJSON.link}
							</a>
							!
						</p>
					</div>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>{cards}</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Projects;
