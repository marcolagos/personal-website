import React from "react";
import ReferencesCard from "../../Components/ReferencesCard/ReferencesCard";
import Background from "../../Assets/mountain-night.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function References() {
	return (
		<section className="references-section">
			<Container fluid className="references-container">
				<Container className="references-intro">
					<h1 className="references-title" data-aos="fade-up" data-aos-duration="1500">
						References
					</h1>
					<p className="references-comment" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
						Feel free to leave comments{" "}
						<a href="/contact" target="_blank" rel="noreferrer" className="dim-orange">
							here
						</a>
						!
					</p>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default References;
