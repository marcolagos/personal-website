import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";
import { CgMinimize } from "react-icons/cg";
import ReferencesMarkdown from "../ReferencesMarkdown/ReferencesMarkdown";

function ReferencesPost(props) {
	const [post, setPost] = useState("");

	const { fileName } = useParams();

	const MarkdownFile = require(`../../../Data/References/Posts/${fileName}.md`);

	useEffect(() => {
        fetch(MarkdownFile)
            .then((res) => res.text())
            .then((res) => setPost(res));
    }, [MarkdownFile, fileName]);
    
    console.log(post);

	return (
		<Modal
			className="fade-scale"
			size="xl"
			show={true}
			scrollable={true}
			backdrop="true"
			keyboard={true}
			animation={true}
		>
			<Modal.Header>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{post === "" ? "Loading" : <ReferencesMarkdown content={post} fileName={fileName} />}
			</Modal.Body>
			<Modal.Footer>
				<Link className="card-button" to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}>
					<CgMinimize className="card-icon" />
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default ReferencesPost;
