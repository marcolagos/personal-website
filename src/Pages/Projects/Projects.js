import React, { useState } from "react";
import ProjectCard from "../../Components/Projects/ProjectCard/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Other/Header/Header";

const cardJSON = require("../../Data/Projects/projects-cards.json");
const headerJSON = require("../../Data/Projects/projects-header.json");

function Projects() {
	const cards = cardJSON.items.map((item, index) => {
		return (
			<Col md={4} className="projects-card" key={index}>
				<ProjectCard
					title={item.title}
					date={item.date}
					image={item.image}
					stack={item.stack}
					github={item.github}
					description={item.description}
				/>
			</Col>
		);
	});
	return (
		<section className="projects-section">
			<Container fluid className="projects-container">
				<Container className="projects-intro">
					<Header
						title={headerJSON.title}
						comment={headerJSON.comment}
						to={headerJSON.to}
						link={headerJSON.link}
					/>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>{cards}</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Projects;
