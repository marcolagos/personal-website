import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";
import { CgCross } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import ReferencesMarkdown from "../ReferencesMarkdown/ReferencesMarkdown";
import ReferencesHeader from "../ReferencesHeader/ReferencesHeader";

function ReferencesPost(props) {
	const [postBody, setPostBody] = useState("");
	const { fileName } = useParams();
	const MarkdownFile = require(`../../../Assets/References/${fileName}/${fileName}.md`);

	useEffect(() => {
		fetch(MarkdownFile)
			.then((res) => res.text())
			.then((res) => setPostBody(res));
	}, [MarkdownFile, fileName]);

	return (
		<Modal
			className="modal"
			show={true}
			scrollable={true}
			backdrop="true"
			keyboard={true}
			animation={true}
			fullscreen={true}
		>
			<Modal.Header className="modal-header">
				<Modal.Title className="modal-title">
					<Link
						className="modal-navigation-link"
						to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}
					>
						<FiX className="modal-navigation-link-icon" />
					</Link>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="modal-body">
				<ReferencesHeader header={true} />
				<ReferencesMarkdown content={postBody} fileName={fileName} />
				<ReferencesHeader header={false}/>
			</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Link
					className="modal-navigation-link"
					to={`${REFERENCES_LINK.substring(0, REFERENCES_LINK.length - 1)}`}
				>
					<CgCross className="modal-footer-link-icon" />
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default ReferencesPost;
