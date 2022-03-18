import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClipboard, FaRegCopy } from "react-icons/fa";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";

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
			style: atomDark,
		};
		SyntaxHighlighter(highlighter);
		const cachedVar = SyntaxHighlighter(highlighter);
		cache.set(children, cachedVar);
		return cachedVar;
	}
	return cachedItem;
};

function Code({ children, language }) {
    const [isCopied, setIsCopied] = useState(false);
    return (
		<div className="code-container">
			<CopyToClipboard onCopy={() => setIsCopied(true)} className="code-copy-button" text={children}>
				<button type="button" aria-label="Copy to Clipboard Button">
					{isCopied ? <FaRegClipboard /> : <FaRegCopy />}
				</button>
			</CopyToClipboard>

			{getCode(children, language)}
		</div>
	);
}

export default Code;