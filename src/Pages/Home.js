import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../Components/ParticleBackground";
import Type from "../Components/Type";
import ProfilePicture from "../Assets/profilepicture.jpg";

function Home() {
	return (
		<Container fluid className="home-container">
			<ParticleBackground className="particles" />
			<Container className="home-intro">
				<Row>
					<Col md={7} className="home-header">
						<h1 className="home-text">
							Hello, I am
							<span className="home-name"> Marco Lagos!</span>
						</h1>
						<Type className="type" />
					</Col>
					<Col md={5} className="home-picture">
						{/* <img src={ProfilePicture} alt="Marco Lagos" className="img-fluid"></img> */}
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Home;
