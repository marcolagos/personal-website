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
				<Card.Img variant="top" src={props.imgUrl} alt="Project Image" />
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
							Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime
							quod deserunt eligendi dolor
							{props.description}
						</p>
					</Card.Text>
					<div className="card-stat-wrapper">
						<Button className="card-button button-1" href={props.linkA}>
							<MdZoomOutMap />
						</Button>
						<Button className="card-button button-2" href={props.linkB}>
							<AiFillGithub />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default ProjectCard;
