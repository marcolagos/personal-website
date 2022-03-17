import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { IoMdExpand } from "react-icons/io";
import { CgMinimize } from "react-icons/cg";
import { RiLandscapeFill } from "react-icons/ri";

function ReferencesCard(props) {
	// tilt to 0 if expanded, button to collapse if expanded, display page if expanded, add tech icons
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ height: "auto" }}>
				<Card className="project-card-view">
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
							<p className="card-text-body">{props.description}</p>
						</Card.Text>
						<div>
							<Button className="card-button" onClick={handleShow}>
								{show ? (
									<RiLandscapeFill className="card-icon" />
								) : (
									<IoMdExpand className="card-icon" />
								)}
							</Button>
							<Button className="card-button">Tech</Button>
						</div>
					</Card.Body>
				</Card>
			</Tilt>
			<Modal
				className="fade-scale"
				size="xl"
				show={show}
				onHide={handleClose}
				scrollable={true}
				backdrop="true"
				keyboard={true}
				animation={true}
			>
				<Modal.Header>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.article}</Modal.Body>
				<Modal.Footer>
					<Button className="card-button" onClick={handleClose}>
						<CgMinimize className="card-icon" />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ReferencesCard;
