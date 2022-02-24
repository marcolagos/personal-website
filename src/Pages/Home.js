import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../Components/ParticleBackground";
import Type from "../Components/Type";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import myImg from "../Assets/profilepicture.jpg";


function Home() {
	return (
		<section>
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
		</section>
	);
}

export default Home;
