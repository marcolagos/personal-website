import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { IoCode } from "react-icons/io5";
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const navigationJSON = require("../../Data/Other/navigation.json");

function Navigation() {
	const [boldLink, setBoldLink] = useState("/");
	const [expanded, setExpanded] = useState(false);
	const [navigationColor, setNavigationColor] = useState(false);

	const getIcon = (title) => {
		if (title === "Home") {
			return <AiOutlineHome className="navigation-icon"/>;
		}
		if (title === "Projects") {
			return <IoCode className="navigation-icon" />;
		}
		if (title === "References") {
			return <BsSearch className="navigation-icon" />;
		}
		if (title === "Contact") {
			return <AiOutlineMessage className="navigation-icon" />;
		}
		if (title === "About") {
			return <BsPersonCircle className="navigation-icon" />;
		}
	}

	const links = navigationJSON.items.map((item, index) => {
		return (
			<Nav.Item className="navigation-item" key={index}>
				<Nav.Link
					onClick={() => {
						setBoldLink("/");
						setExpanded(false);
					}}
					className={boldLink == item.to ? "navigation-link bold-link" : "navigation-link"}
					as={Link}
					to={item.to}
				>
					{getIcon(item.title)}
					{item.title}
				</Nav.Link>
			</Nav.Item>
		);
	});

	function scrollHandler() {
		if (window.scrollY >= 20) {
			setNavigationColor(true);
		} else {
			setNavigationColor(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar collapseOnSelect fixed="top" className={navigationColor ? "navigation-scroll" : "navigation"} expand="lg" expanded={expanded}>
			<Container className="navigation-container">
				<Navbar.Brand className="navigation-brand" href="/">
					{navigationJSON.brand}
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						setExpanded(expanded ? false : true);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						{links}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
