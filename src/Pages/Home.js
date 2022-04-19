import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Type from "../Components/Type";
import AnimatedPage from "../Components/AnimatedPage";

function Home() {
	return (
		<AnimatedPage>
			<section className="home-section">
				<Container fluid className="home-container" id="home-container">
					<Container className="home-intro">
						<Row>
							<Col md={12} className="home-header">
								<h1 className="home-text">Hello, I'm Marco Lagos</h1>
								<div className="type">
									<Type
										words={[
											"Full-stack Developer",
											"Open-source Contributor",
											"Computer Scientist",
										]}
									/>
								</div>
							</Col>
						</Row>
					</Container>
				</Container>
			</section>
		</AnimatedPage>
	);
}

export default Home;
