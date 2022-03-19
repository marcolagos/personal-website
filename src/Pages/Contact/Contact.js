import React, { useState, useEffect, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineForm, AiFillCheckCircle } from "react-icons/ai";
import { Form, Button } from "react-bootstrap";
import { db } from "../../Firebase";
import ThreeDotsWave from "../../Components/ThreeDotsWave/ThreeDotsWave";

const bodyJSON = require("../../Data/Contact/contact-body.json");
const headerJSON = require("../../Data/Contact/contact-header.json");

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

	const areas = bodyJSON.items.map((item, index) => {
		return (
			<Form.Group className="form-group pt-3">
				<Form.Label className="form-label">{item.title}</Form.Label>
				<Form.Control
					className={`form-input ${item.as}`}
					type={item.type}
					placeholder={item.placeholder}
					value={item.type === "message" ? message : item.type === "name" ? name : email}
					onChange={item.type === "message" ? messageChange : item.type === "name" ? nameChange : emailChange}
					as={item.as}
					key={index}
				/>
			</Form.Group>
		);
	});

	return (
		<section className="contact-section">
			<Container fluid className="contact-container">
				<Container className="contact-intro">
					<Row>
						<div
							className="contact-header"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once={true}
						>
							<h1 className="contact-title">{headerJSON.title}</h1>
							<p className="contact-comment">
								{headerJSON.comment}
								<a href={headerJSON.to} target="_blank" rel="noreferrer" className="dim-orange">
									{headerJSON.link}
								</a>
							</p>
						</div>
						<Col md={12} style={{ justifyContent: "center", paddingBottom: "10px" }}>
							<Form className="form" onSubmit={handleSubmit}>
								{areas}
								<div>
									<div className={warning ? "warning display" : "warning"}>{bodyJSON.warning}</div>
									<div className={direct ? "direct display" : "direct"}>{bodyJSON.direction}</div>
								</div>
								<br />
								<Button className="form-button" type="submit">
									{loader ? (
										check ? (
											<AiFillCheckCircle className="form-icon" />
										) : (
											<ThreeDotsWave />
										)
									) : (
										<AiOutlineForm className="form-icon" />
									)}
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="contact-container-2"></Container>
		</section>
	);
}

export default Contact;
