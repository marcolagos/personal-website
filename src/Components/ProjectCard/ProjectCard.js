import React from "react";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { MdZoomOutMap } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai";

function ProjectCard(props) {
	return (
		<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ height: "auto" }}>
			<Card className="project-card-view">
				<Card.Img variant="top" src={props.image} alt="Project Image" style={{height: "15rem"}} className="card-image"/>
				<ListGroup>
					<ListGroupItem className="card-date">
						<span className="card-text-date">{props.date}</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Body className="card-body">
					<Card.Title>
						<h2 className="card-text-title">{props.title}</h2>
					</Card.Title>
					<Card.Text style={{ textAlign: "justify" }}>
						<p className="card-text-body">
							{props.description}
						</p>
					</Card.Text>
					<div className="card-stat-wrapper">
						<Button className="card-button button-1" href={props.linkA} target="_blank">
							<MdZoomOutMap className="icon" />
						</Button>
						<Button className="card-button button-2" href={props.github} target="_blank">
							<AiFillGithub className="card-icon" />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default ProjectCard;
