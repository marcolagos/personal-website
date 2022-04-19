import React from "react";
// import LATEX from "react-latex";

function Latex({ children }) {
	return (
		<span className="latex">
			<div>{String(children)}</div>
		</span>
	);
}

export default Latex;
