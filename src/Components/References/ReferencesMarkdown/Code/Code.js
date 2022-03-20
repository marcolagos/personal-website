import React, { useState, useRef } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { Button, Overlay, Tooltip } from "react-bootstrap";

import { CopyToClipboard } from "react-copy-to-clipboard";
import CodeStyle from "../../../../Utils/CodeStyle.Utils";

import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";

import { BiCopy } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sass", sass);

const cache = new Map();

const getCode = (children, language) => {
	const cachedItem = cache.get(children);
	if (cachedItem === undefined) {
		const highlighter = {
			language,
			children: children,
			style: CodeStyle,
		};
		SyntaxHighlighter(highlighter);
		const cachedVar = SyntaxHighlighter(highlighter);
		cache.set(children, cachedVar);
		return cachedVar;
	}
	return cachedItem;
};

function Code({ children, language }) {
	const [show, setShow] = useState(false);
	const [copied, setCopied] = useState(false);
	const target = useRef(null);

	const handleClick = () => {
		setCopied(true);
		setShow(true)
		setTimeout(() => {
			setCopied(false);
			setShow(false);
		}, 2000);
	};

	return (
		<span className="code-container">
			<CopyToClipboard onCopy={handleClick} className="code-copy-button" text={children}>
				<Button type="button" ref={target}>
					{copied ? <BsCheck2 /> : <BiCopy />}
				</Button>
			</CopyToClipboard>
			<Overlay target={target.current} show={show} placement="top">
				<Tooltip>Copied!</Tooltip>
			</Overlay>

			{getCode(children, language)}
		</span>
	);
}

export default Code;
