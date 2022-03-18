import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { IoMdExpand } from "react-icons/io";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";


function ReferencesCard(props) {
	return (
		<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ height: "auto" }}>
			<Card className="project-card-view">
				<ListGroup>
					<ListGroupItem className="card-date">
						<span className="card-text-date">
							{props.date} - {props.minutes}
						</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Body className="card-body">
					<Card.Title>
						<h2 className="card-text-title">{props.title}</h2>
					</Card.Title>
					<Card.Text style={{ textAlign: "justify" }}>
						<p className="card-text-body">{props.description}</p>
					</Card.Text>
					<div>
						<Link className="card-button" to={`${REFERENCES_LINK}${props.post}`}>
							<IoMdExpand className="card-icon" />
						</Link>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default ReferencesCard;
