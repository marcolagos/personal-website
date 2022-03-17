import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { MdCloseFullscreen, MdOpenInFull } from "react-icons/md";

function ReferencesCard(props) {
	const [modal, setModal] = useState(false);

	// tilt to 0 if expanded, button to collapse if expanded, display page if expanded, add tech icons
	const clickHandler = () => {
		if (modal) {
			setModal(false);
		} else {
			setModal(true);
		}
	};

	return (
		<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ height: "auto" }}>
			<Card className={modal ? "modal-project-card-view" : "project-card-view"}>
				<ListGroup>
					<ListGroupItem className={modal ? "modal-card-date" : "card-date"}>
						<span className={modal ? "modal-card-text-date" : "card-text-date"}>{props.date}</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Body className={modal ? "modal-card-body" : "card-body"}>
					<Card.Title>
						<h2 className={modal ? "modal-card-text-title" : "card-text-title"}>{props.title}</h2>
					</Card.Title>
					<Card.Text style={{ textAlign: "justify" }}>
						<p className={modal ? "modal-card-text-body" : "card-text-body"}>{props.description}</p>
					</Card.Text>
					<div>
						<Button className={modal ? "modal-card-button" : "card-button"} onClick={clickHandler}>
							{modal ? (
								<MdCloseFullscreen className={modal ? "modal-card-icon" : "card-icon"} />
							) : (
								<MdOpenInFull className={modal ? "modal-card-icon" : "card-icon"} />
							)}
						</Button>
						<Button className={modal ? "modal-card-button" : "card-button"}>Tech</Button>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default ReferencesCard;
