import React from "react";
import LATEX from "react-latex";

function Latex({ children }) {
	return (
		<div>
			<LATEX>{String(children)}</LATEX>
		</div>
	);
}

export default Latex;
