import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../../Components/Other/Header/Header";
import Post from "../../Components/Other/Post/Post";

import AnimatedPage from "../../Components/Other/AnimatedPage/AnimatedPage";

const cardJSON = require("../../Data/References/references-cards.json");
const headerJSON = require("../../Data/References/references-header.json");

function References() {
	const cards = cardJSON.items.map((item, index) => {
		return (
			<Col md={4} className="references-card" key={index}>
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
			<section className="references-section">
				<Container fluid className="references-container">
					<Container className="references-intro">
						<Header
							title={headerJSON.title}
							comment={headerJSON.comment}
							to={headerJSON.to}
							link={headerJSON.link}
						/>
						<Row style={{ justifyContent: "center", paddingBottom: "10px" }}> {cards}</Row>
					</Container>
				</Container>
			</section>
		</AnimatedPage>
	);
}

export default References;
