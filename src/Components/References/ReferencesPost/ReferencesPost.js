import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Modal from "react-bootstrap/Modal";
import { useParams, Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";

function ReferencesPost(props) {

    const [post, setPost] = useState("");

	const { fileName } = useParams();
	let markdownFile = require(`../../../Data/References/Posts/${fileName}.md`);

	return (
		<Modal
			className="fade-scale"
			size="xl"
			show={true}
			onHide={handleClose}
			scrollable={true}
			backdrop="true"
			keyboard={true}
			animation={true}
		>
			<Modal.Header>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{post === "" ? "Loading" : <BlogPostMarkdown content={post} fileName={blogPostFileName} />}
			</Modal.Body>
			<Modal.Footer>
				<Link className="card-button" onClick={handleClose} to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}>
					<CgMinimize className="card-icon" />
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default ReferencesPost;
