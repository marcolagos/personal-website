import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { IoCode } from "react-icons/io5";
import { BsSearch, BsPersonCircle, BsFileText } from "react-icons/bs";

function Navigation() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);
	return (
		<Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
			<Container>
				{/* <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand"/>
				</Navbar.Brand> */}
				<Nav className="ml-auto" defaultActiveKey="#home">
					<Nav.Item>
						<Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
							<AiOutlineHome style={{ marginBottom: "2px" }} /> Home
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
							<IoCode style={{ marginBottom: "2px" }} /> Projects
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link as={Link} to="/references" onClick={() => updateExpanded(false)}>
							<BsSearch style={{ marginBottom: "2px" }} /> References
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
							<BsFileText style={{ marginBottom: "2px" }} /> Resume
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
							<BsPersonCircle style={{ marginBottom: "2px" }} /> About
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Navigation;
