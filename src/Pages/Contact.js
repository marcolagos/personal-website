import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { AiOutlineForm } from "@react-icons/all-files/ai/AiOutlineForm";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";

import { db } from "../Firebase";

import ThreeDotsWave from "../Components/ThreeDotsWave";
import Header from "../Components/Header";
import AnimatedPage from "../Components/AnimatedPage";

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
			}, 2000);
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

	const items = [
		{
			title: "Name:",
			placeholder: "Enter name",
			type: "name",
		},
		{
			title: "Email:",
			placeholder: "Enter email",
			type: "email",
		},
		{
			title: "Message:",
			placeholder: "Enter message",
			type: "message",
			as: "textarea",
		},
	];

	const areas = items.map((item, index) => {
		return (
			<Form.Group className="form-group pt-3" key={index}>
				<Form.Label className="form-label">{item.title}</Form.Label>
				<Form.Control
					className={`form-input ${item.as}`}
					type={item.type}
					placeholder={item.placeholder}
					value={item.type === "message" ? message : item.type === "name" ? name : email}
					onChange={item.type === "message" ? messageChange : item.type === "name" ? nameChange : emailChange}
					as={item.as}
				/>
			</Form.Group>
		);
	});

	return (
		<AnimatedPage>
			<section className="contact-section">
				<Container fluid className="contact-container">
					<Container className="contact-intro">
						<Row>
							<Header
								title={"Contact"}
								comment={"Alternatively, messages through media are welcomed!"}
								to={""}
								link={""}
							/>
							<Col md={12} style={{ justifyContent: "center", paddingBottom: "10px" }}>
								<Form className="form" onSubmit={handleSubmit}>
									{areas}
									<div>
										<div className={warning ? "warning display" : "warning"}>
											{"Please fill out all fields."}
										</div>
									</div>
									<br />
									<Button className="form-button" type="submit">
										{loader ? (
											check ? (
												<AiFillCheckCircle className="form-icon form-check-button" />
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
				<Container fluid></Container>
			</section>
		</AnimatedPage>
	);
}

export default Contact;
