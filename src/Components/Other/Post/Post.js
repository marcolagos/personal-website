import React from "react";
import Tilt from "react-parallax-tilt";
import { ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { GrNode, GrReactjs } from "react-icons/gr";
import { SiAdobeillustrator, SiAdobexd, SiMongodb } from "react-icons/si";
import { IoMdExpand } from "react-icons/io";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";
import { Link } from "react-router-dom";

function Post({ title, date, description, minutes, image, stack, github, post, posts }) {
	const tech = stack.map((item, index) => {
		if (item === "JavaScript") {
			return <GrNode className="card-icon" key={index} />;
		}
		if (item === "Node.js") {
			return <GrNode className="card-icon" key={index} />;
		}
		if (item === "React.js") {
			return <GrReactjs className="card-icon" key={index} />;
		}
		if (item === "MongoDB") {
			return <SiMongodb className="card-icon" key={index} />;
		}
		if (item === "AdobeI") {
			return <SiAdobeillustrator className="card-icon" key={index} />;
		}
		if (item === "AdobeXD") {
			return <SiAdobexd className="card-icon" key={index} />;
		}
	});

	var imagePath = null;
	if (image) {
		imagePath = require(`../../../Assets/Projects/${image}`);
	}

	return (
		<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ height: "auto" }}>
			<Card className="project-card-view">
				{image ? (
					<Card.Img
						variant="top"
						src={imagePath}
						alt="Project Image"
						style={{ height: "15rem" }}
						className="card-image"
					/>
				) : null}
				<ListGroup>
					<ListGroupItem className="card-date">
						<span className="card-text-date">
							{date}
							{minutes ? `- ${minutes}` : null}
						</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Body className="card-body">
					<Card.Title>
						<h2 className="card-text-title">{title}</h2>
					</Card.Title>
					<Card.Text style={{ textAlign: "justify" }} className="card-text-body">
						{description}
					</Card.Text>
					<div className="card-stat-wrapper">
						{github ? (
							<Button className="card-button" href={github} target="_blank">
								<AiFillGithub className="card-icon" />
							</Button>
						) : (
							<Link className="card-button" to={`${REFERENCES_LINK}${post}`}>
								<IoMdExpand className="card-icon" />
							</Link>
						)}
						<Button className="card-button-stack">{tech}</Button>
					</div>
				</Card.Body>
			</Card>
		</Tilt>
	);
}

export default Post;
