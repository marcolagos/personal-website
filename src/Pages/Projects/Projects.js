import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Other/Header/Header";
import Post from "../../Components/Other/Post/Post";

import AnimatedPage from "../../Components/Other/AnimatedPage/AnimatedPage";

const cardJSON = require("../../Data/Projects/projects-cards.json");
const headerJSON = require("../../Data/Projects/projects-header.json");

function Projects() {
	const cards = cardJSON.items.map((item, index) => {
		return (
			<Col md={4} className="projects-card" key={index}>
				<Post
					title={item.title}
					date={item.date}
					description={item.description}
					minutes={item.minutes}
					image={item.image}
					github={item.github}
					stack={item.stack}
					post={item.post}
				/>
			</Col>
		);
	});
	return (
		<AnimatedPage>
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
		</AnimatedPage>
	);
}

export default Projects;
