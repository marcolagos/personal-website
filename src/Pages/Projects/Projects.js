import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Background from "../../Assets/mountain-night.jpeg";
import { Container, Row, Col } from "react-bootstrap";

// Images
import Swipo from "../../Assets/Swipo.jpg";
import PersonalWebsite from "../../Assets/PersonalWebsite.JPG";
import FHK from "../../Assets/FHK.JPG";
import Bloxorz from "../../Assets/Bloxorz.JPG";
import Blog from "../../Assets/Blog.JPG";

function Projects() {
	return (
		<Container fluid className="project-section">
			{/* <Particle /> */}
			<Container className="project-intro">
				<h1 className="project-title" data-aos="fade-up" data-aos-duration="1500">
					<span className="orange">My</span> Projects
				</h1>
				<p className="project-comment" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
					Feel free to leave comments{" "}
					<a href="/contact" target="_blank" rel="noreferrer" className="dim-orange">
						here
					</a>
					!
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col
						md={4}
						className="project-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="700"
					>
						<ProjectCard
							date={"01/31/2022"}
							title={"Personal Website"}
							image={PersonalWebsite}
							linkA={"Link 1"}
							github={"https://github.com/marcolagos/marco-lagos"}
							description={
								"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
							}
						/>
					</Col>

					<Col
						md={4}
						className="project-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="900"
					>
						<ProjectCard
							date={"01/05/2022"}
							title={"Mock-up Blog"}
							image={Blog}
							linkA={"Link 1"}
							github={"https://github.com/marcolagos/mock-blog"}
							description={
								"A simple blog, as a precursor to a later project coming soon. Used React,js/React.js Libraries, Express.js, and MongoDB, along with some other useful Node.js libraries."
							}
						/>
					</Col>

					<Col
						md={4}
						className="project-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="1100"
					>
						<ProjectCard
							date={"12/20/2021"}
							title={"Bloxorz"}
							image={Bloxorz}
							linkA={"Link 1"}
							github={"https://github.com/marcolagos/bloxorz"}
							description={
								'Bloxorz is my version of the game "Bloxorz" by Damien Clarke in 2007. I used Three.js to render the 3D figures and animations, along with Cannon.js as the physics engine.'
							}
						/>
					</Col>
					<Col
						md={4}
						className="project-card"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<ProjectCard
							date={"10/08/2022"}
							title={"FHK's Website"}
							image={FHK}
							linkA={"LinkA"}
							github={"https://github.com/marcolagos/fhk/commits/main"}
							description={
								"For the Father's House Kids non-profit organization, designed an updated website using React.js/React.js Libraries, first designed in Adobe XD and Adobe Illustrator."
							}
						/>
					</Col>

					<Col
						md={4}
						className="project-card"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<ProjectCard
							date={"09/18/2021"}
							title={"Swipo"}
							image={Swipo}
							linkA={"Link 1"}
							github={"https://github.com/marcolagos/swipo"}
							description={
								"For HackRice 2022, created Swipo: a tinder-like app with songs and playlists instead of people. One can either dislike or like songs in a spotify playlist by swiping left or right, respectively."
							}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
