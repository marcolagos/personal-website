import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { IoMdExpand } from "react-icons/io";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";


function ReferencesCard({ title, date, minutes, description, post }) {
	return (
		<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} style={{ height: "auto" }}>
			<Card className="project-card-view">
				<ListGroup>
					<ListGroupItem className="card-date">
						<span className="card-text-date">
							{date} - {minutes}
						</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Body className="card-body">
					<Card.Title>
						<h2 className="card-text-title">{title}</h2>
					</Card.Title>
					<Card.Text style={{ textAlign: "justify" }} className="card-text-body">
						{description}
					</Card.Text>
					<div>
						<Link className="card-button" to={`${REFERENCES_LINK}${post}`}>
							<IoMdExpand className="card-icon" />
						</Link>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default ReferencesCard;
