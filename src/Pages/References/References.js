import React from "react";
import ReferencesCard from "../../Components/References/ReferencesCard/ReferencesCard";
import Background from "../../Assets/mountain-night.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const cardJSON = require("../../Data/References/references-cards.json");
const headerJSON = require("../../Data/References/references-header.json");

function References() {
	const cards = cardJSON.items.map((item, index) => {
		return (
			<Col md={4} className="references-card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
				<ReferencesCard
					title={item.title}
					date={item.date}
					minutes={item.minutes}
					description={item.description}
					post={item.post}
					key={index}
				/>
			</Col>
		);
	});

	return (
		<section className="references-section">
			<Container fluid className="references-container">
				<Container className="references-intro">
					<h1 className="references-title" data-aos="fade-up" data-aos-duration="1500">
						{headerJSON.title}
					</h1>
					<p className="references-comment" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
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

export default References;
