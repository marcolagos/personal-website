import React from "react";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { MdZoomOutMap } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GrNode, GrReactjs } from "react-icons/gr";
import { SiAdobeillustrator, SiAdobexd, SiMongodb } from "react-icons/si";

function ProjectCard({ title, date, image, stack, github, description }) {
	const techStack = stack.map((item, index) => {
		console.log(item);
		if (item === "JavaScript") {
			return <GrNode className="card-icon" />;
		}
		if (item === "Node.js") {
			return <GrNode className="card-icon" />;
		}
		if (item === "React.js") {
			return <GrReactjs className="card-icon" />;
		}
		if (item === "MongoDB") {
			return <SiMongodb className="card-icon" />;
		}
		if (item === "AdobeI") {
			return <SiAdobeillustrator className="card-icon" />;
		}
		if (item === "AdobeXD") {
			return <SiAdobexd className="card-icon" />;
		}
	});

	const imagePath = require(`../../Assets/Projects/${image}`);
	return (
		<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ height: "auto" }}>
			<Card className="project-card-view">
				<Card.Img
					variant="top"
					src={imagePath}
					alt="Project Image"
					style={{ height: "15rem" }}
					className="card-image"
				/>
				<ListGroup>
					<ListGroupItem className="card-date">
						<span className="card-text-date">{date}</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Body className="card-body">
					<Card.Title>
						<h2 className="card-text-title">{title}</h2>
					</Card.Title>
					<Card.Text style={{ textAlign: "justify" }}>
						<p className="card-text-body">{description}</p>
					</Card.Text>
					<div className="card-stat-wrapper">
						<Button className="card-button" href={github} target="_blank">
							<AiFillGithub className="card-icon" />
						</Button>
						<Button className="card-button-stack">{techStack}</Button>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default ProjectCard;
