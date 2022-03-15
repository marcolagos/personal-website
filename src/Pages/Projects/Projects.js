import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Background from "../../Assets/mountain-night.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
	return (
		<section className="project-section">
			<Container fluid className="project-container">
				<Container className="project-intro">
					<h1 className="project-heading">
						<span className="orange">My</span> Projects
					</h1>
					<p className="project-comment">
						Feel free to leave comments{" "}
						<a href="/contact" target="_blank" rel="noreferrer" className="dim-orange">
							here
						</a>
						!
					</p>
					<Row style={{ justifyContent: "center" }}>
						<Col md={3} className="project-card card-1">
							<ProjectCard
								date={"01/31/2022"}
								title={"Personal Website"}
								imgUrl={Background}
								linkA={"Link 1"}
								linkB={"Link 2"}
							/>
						</Col>

						<Col md={3} className="project-card card-2">
							<ProjectCard
								date={"12/20/2021"}
								title={"Bloxorz"}
								imgUrl={Background}
								linkA={"Link 1"}
								linkB={"Link 2"}
							/>
						</Col>

						<Col md={3} className="project-card card-3">
							<ProjectCard
								date={"09/18/2021"}
								title={"Swipo"}
								imgUrl={Background}
								linkA={"Link 1"}
								linkB={"Link 2"}
							/>
						</Col>
					</Row>
					<Row style={{ justifyContent: "center", marginTop: "2rem", marginBottom: "2rem" }}>
						<Col md={3} className="project-card card-1">
							<ProjectCard
								date={"Date"}
								title={"Title"}
								imgUrl={Background}
								linkA={"Link 1"}
								linkB={"Link 2"}
							/>
						</Col>

						<Col md={3} className="project-card card-2">
							<ProjectCard
								date={"Date"}
								title={"Title"}
								imgUrl={Background}
								linkA={"Link 1"}
								linkB={"Link 2"}
							/>
						</Col>

						<Col md={3} className="project-card card-3">
							<ProjectCard
								date={"Date"}
								title={"Title"}
								imgUrl={Background}
								linkA={"Link 1"}
								linkB={"Link 2"}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Projects;
