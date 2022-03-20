import React from "react";
import LATEX from "react-latex";

function Latex({ children }) {
	return (
		<div className="latex">
			<LATEX>{String(children)}</LATEX>
		</div>
	);
}

export default Latex;
