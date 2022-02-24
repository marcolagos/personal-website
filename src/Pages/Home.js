import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../Components/ParticleBackground";
import Type from "../Components/Type";

function Home() {
	return (
		<Container fluid className="home-container">
			<ParticleBackground className="particles" />
			<Container className="home-intro">
				<Row>
					<Col md={9} className="home-header">
						<h1 className="home-text">
							Hello, I am 
							<div className="home-name"> Marco Lagos</div>
						</h1>
						<div>
							<Type className="type" />
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Home;
