import React from "react";
import Card from "../../Components/Card/Card";
import Background from "../../Assets/mountain-night.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
	return (
		<Container fluid className="card-container">
			<Container className="cards">
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={3} className="card-col">
						<Card date={"Date"} title={"Title"} imgUrl={Background} linkA={"Link 1"} linkB={"Link 2"} />
					</Col>
					<Col md={3} className="card-col">
						<Card date={"Date"} title={"Title"} imgUrl={Background} linkA={"Link 1"} linkB={"Link 2"} />
					</Col>
					<Col md={3} className="card-col">
						<Card date={"Date"} title={"Title"} imgUrl={Background} linkA={"Link 1"} linkB={"Link 2"} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
