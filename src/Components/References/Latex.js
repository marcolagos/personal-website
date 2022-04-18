import React from "react";
import LATEX from "react-latex";

function Latex({ children }) {
	return (
		<span className="latex">
			<LATEX>{String(children)}</LATEX>
		</span>
	);
}

export default Latex;
