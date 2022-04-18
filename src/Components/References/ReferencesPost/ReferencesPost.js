import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { REFERENCES_LINK } from "../../../Utils/Constants.Utils";

import Modal from "react-bootstrap/Modal";

import { FiX } from "@react-icons/all-files/fi/FiX";
import { CgCross } from "@react-icons/all-files/cg/CgCross";

import ReferencesMarkdown from "../ReferencesMarkdown/ReferencesMarkdown";
import ReferencesHeader from "../ReferencesHeader/ReferencesHeader";

import AnimatedPage from "../../AnimatedPage";

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
		<AnimatedPage >
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
					<ReferencesHeader header={false} />
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
		</AnimatedPage>
	);
}

export default ReferencesPost;
