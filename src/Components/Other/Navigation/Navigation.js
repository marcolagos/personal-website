import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineMessage } from "@react-icons/all-files/ai/AiOutlineMessage";
import { IoIosCode } from "@react-icons/all-files/io/IoIosCode";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsPeopleCircle } from "@react-icons/all-files/bs/BsPeopleCircle";

import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";

const navigationJSON = require("../../../Data/Other/navigation.json");

function Navigation() {
	const [boldLink, setBoldLink] = useState("/");
	const [expanded, setExpanded] = useState(false);

	const getIcon = (title) => {
		if (title === "Home") {
			return <AiOutlineHome className="navigation-icon" />;
		}
		if (title === "Projects") {
			return <IoIosCode className="navigation-icon" />;
		}
		if (title === "References") {
			return <BsSearch className="navigation-icon" />;
		}
		if (title === "Contact") {
			return <AiOutlineMessage className="navigation-icon" />;
		}
		if (title === "About") {
			return <BsPeopleCircle className="navigation-icon" />;
		}
	};

	const links = navigationJSON.items.map((item, index) => {
		return (
			<Nav.Item className="navigation-item" key={index}>
				<Nav.Link
					onClick={() => {
						setBoldLink("/");
						setExpanded(false);
					}}
					className={boldLink === item.to ? "navigation-link bold-link" : "navigation-link"}
					as={Link}
					to={item.to}
				>
					{getIcon(item.title)}
					{item.title}
				</Nav.Link>
			</Nav.Item>
		);
	});


	if (!(useLocation().pathname.indexOf(REFERENCES_LINK) >= 0)) {
		return (
			<Navbar
				collapseOnSelect
				fixed="top"
				className={"navigation"}
				expand="lg"
				expanded={expanded}
			>
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
						<Nav>{links}</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	} else {
		return null;
	}
}

export default Navigation;
