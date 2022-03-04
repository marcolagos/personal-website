import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineForm } from "react-icons/ai";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

import { Link } from "react-router-dom";

function Contact() {
	const [show, setShow] = useState(true);

	return (
		<section className="home-section">
			<Container fluid className="contact-container">
				<Container className="contact-intro">
					<Row>
						<Col md={12} className="contact-header">
							<h1 className="contact-title">
								Contact <span className="orange">Me</span>
							</h1>
							<Form className="form">
								<Form.Group className="form-group pt-3">
									<Form.Label className="form-label">Name:</Form.Label>
									<Form.Control className="form-input" type="name" placeholder="Enter name" />
								</Form.Group>
								<Form.Group className="form-group">
									<Form.Label className="form-label">Email:</Form.Label>
									<Form.Control className="form-control" type="email" placeholder="Enter email" />
								</Form.Group>
								<Form.Group className="form-group">
									<Form.Label className="form-label">Message:</Form.Label>
									<Form.Control
										className="form-control text-area"
										as="textarea"
										placeholder="Enter message"
									/>
								</Form.Group>
								<br />
								<Button className="contact-icon-color contact-icon-button" type="submit">
									<AiOutlineForm />
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Contact;
