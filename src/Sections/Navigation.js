import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { IoCode } from "react-icons/io5";
import { BsSearch, BsPersonCircle, BsFileText } from "react-icons/bs";

function Navigation() {
	const [boldLink, setBoldLink] = useState("/");
	const [expanded, setExpanded] = useState(false);
	return (
		<Navbar collapseOnSelect fixed="top" className="navigation" expand="lg" expanded={expanded}>
			<Container className="navigation-container">
				<Navbar.Brand className="navigation-brand" href="/">
					ml.
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {
					setExpanded(expanded ? false : true);

				}}>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse  id="responsive-navbar-nav">
					<Nav>
						<Nav.Item className="navigation-item">
							<Nav.Link
								onClick={() => {
									setBoldLink("/");
									setExpanded(false);
								}}
								className={boldLink == "/" ? "navigation-link boldLink" : "navigation-link"}
								as={Link}
								to="/"
							>
								<AiOutlineHome /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className="navigation-item">
							<Nav.Link
								onClick={() => {
									setBoldLink("/projects");
									setExpanded(false);
								}}
								className={boldLink == "/projects" ? "navigation-link boldLink" : "navigation-link"}
								as={Link}
								to="/projects"
							>
								<IoCode /> Projects
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className="navigation-item">
							<Nav.Link
								onClick={() => {
									setBoldLink("/references");
									setExpanded(false);
								}}
								className={boldLink == "/references" ? "navigation-link boldLink" : "navigation-link"}
								as={Link}
								to="/references"
							>
								<BsSearch /> References
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className="navigation-item">
							<Nav.Link
								onClick={() => {
									setBoldLink("/resume");
									setExpanded(false);
								}}
								className={boldLink == "/resume" ? "navigation-link boldLink" : "navigation-link"}
								as={Link}
								to="/resume"
							>
								<BsFileText /> Resume
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className="navigation-item">
							<Nav.Link
								onClick={() => {
									setBoldLink("/about");
									setExpanded(false);
								}}
								className={boldLink == "/about" ? "navigation-link boldLink" : "navigation-link"}
								as={Link}
								to="/about"
							>
								<BsPersonCircle /> About
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
