import React from "react";
import { compiler } from "markdown-to-jsx";
import Code from "../../Code/Code";
import Media from "../../Media/Media";

const cache = new Map();

const retrieveCompiledBlogPostFromCache = (content, fileName) => {
	// don't cache react-snap SSR pass
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
			},
		});
		cache.set(fileName, newItem);
		return newItem;
	}

	return item;
};

function ReferencesMarkdown({content, fileName}) {
    return <div className="references-markdown">{retrieveCompiledBlogPostFromCache(content, fileName)}</div>;
}

export default ReferencesMarkdown;
