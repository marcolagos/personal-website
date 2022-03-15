import React, { useState, useEffect, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineForm, AiFillCheckCircle } from "react-icons/ai";
import { Form, Button } from "react-bootstrap";
import { db } from "../../Firebase";
import ThreeDotsWave from "../../Components/ThreeDotsWave/ThreeDotsWave";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [warning, setWarning] = useState(false);
	const [loader, setLoader] = useState(false);
	const [check, setCheck] = useState(false);
	const [direct, setDirect] = useState(false);

	const resetLoaderCheck = () => {
		if (loader) {
			setLoader(false);
		}
		if (check && direct) {
			setCheck(false);
			setDirect(false);
		}
	};
	const nameChange = (e) => {
		resetLoaderCheck();
		if (e.target.value) {
			setName(e.target.value);
			localStorage.setItem("name", e.target.value);
		} else {
			setName("");
			localStorage.setItem("name", "");
		}
	};
	const emailChange = (e) => {
		resetLoaderCheck();
		if (e.target.value) {
			setEmail(e.target.value);
			localStorage.setItem("email", e.target.value);
		} else {
			setEmail("");
			localStorage.setItem("email", "");
		}
	};
	const messageChange = (e) => {
		resetLoaderCheck();
		if (e.target.value) {
			setMessage(e.target.value);
			localStorage.setItem("message", e.target.value);
		} else {
			setMessage("");
			localStorage.setItem("message", "");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!check) {
			if (!name || !email || !message) {
				setWarning(true);
				return;
			} else {
				setWarning(false);
				setLoader(true);
			}
			setTimeout(() => {
				setCheck(true);
				setDirect(true);
				db.collection("Contacts").add({
					name: name,
					email: email,
					message: message,
				});

				setName("");
				setEmail("");
				setMessage("");
				localStorage.clear();
			}, 3000);
		}
	};

	useEffect(() => {
		var nameLS = localStorage.getItem("name");
		var emailLS = localStorage.getItem("email");
		var messageLS = localStorage.getItem("message");
		if (nameLS) {
			setName(localStorage.getItem("name"));
		}
		if (emailLS) {
			setEmail(localStorage.getItem("email"));
		}
		if (messageLS) {
			setMessage(localStorage.getItem("message"));
		}
	}, []);

	return (
		<section className="contact-section">
			<Container fluid className="contact-container">
				<Container className="contact-intro">
					<Row>
						<Col md={12} className="contact-header" data-aos="zoom-in" data-aos-duration="1500">
							<h1 className="contact-title" data-aos="fade-up" data-aos-duration="1500">
								Contact <span className="orange">Me</span>
							</h1>
							<p
								className="contact-comment"
								data-aos="fade-up"
								data-aos-duration="1500"
								data-aos-delay="500"
							>
								Alternatively, I welcome messages through media!
							</p>
							<Form className="form" onSubmit={handleSubmit}>
								<Form.Group
									className="form-group pt-3"
									data-aos="fade-left"
									data-aos-duration="1000"
									data-aos-delay="700"
								>
									<Form.Label className="form-label">Name:</Form.Label>
									<Form.Control
										className="form-input"
										type="name"
										placeholder="Enter name"
										autoComplete="name"
										value={name}
										onChange={nameChange}
									/>
								</Form.Group>
								<Form.Group
									className="form-group"
									data-aos="fade-left"
									data-aos-duration="1000"
									data-aos-delay="900"
								>
									<Form.Label className="form-label">Email:</Form.Label>
									<Form.Control
										className="form-control"
										type="email"
										placeholder="Enter email"
										autoComplete="email"
										value={email}
										onChange={emailChange}
									/>
								</Form.Group>
								<Form.Group
									className="form-group"
									data-aos="fade-left"
									data-aos-duration="1000"
									data-aos-delay="1100"
								>
									<Form.Label className="form-label">Message:</Form.Label>
									<Form.Control
										className="form-control text-area"
										as="textarea"
										placeholder="Enter message"
										value={message}
										onChange={messageChange}
									/>
								</Form.Group>
								<div>
									<div className={warning ? "warning display" : "warning"}>
										Please fill out all fields.
									</div>
									<div className={direct ? "direct display" : "direct"}>
										Type in fields again to send another message!
									</div>
								</div>
								<br />
								<Button className="contact-icon-color contact-icon-button" type="submit">
									{loader ? check ? <AiFillCheckCircle /> : <ThreeDotsWave /> : <AiOutlineForm />}
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
