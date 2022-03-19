import React from "react";
import { compiler } from "markdown-to-jsx";
import Code from "./Code/Code";
import Media from "./Media/Media";
import Latex from "./Latex/Latex";

const cache = new Map();

const getPost = (content, fileName) => {

    if (content === "") return null;

	const item = cache.get(fileName);
	if (item === undefined) {
		const newItem = compiler(content, {
			overrides: {
				Media: {
					component: Media,
				},
				Code: {
					component: Code,
				},
				Latex: {
					component: Latex,
				},
			},
		});
		cache.set(fileName, newItem);
		return newItem;
	}

	return item;
};

function ReferencesMarkdown({ content, fileName }) {
    return <div className="references-markdown">{getPost(content, fileName)}</div>;
}

export default ReferencesMarkdown;
