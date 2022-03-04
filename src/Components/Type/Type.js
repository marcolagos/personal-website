import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
	return (
		<div>
			<Typewriter
				options={{
					strings: [
						"MERN Stack Developer",
						"Open Source Contributor",
						"Problem Solver",
					],
					autoStart: true,
					loop: true,
					deleteSpeed: 40,
				}}
			/>
		</div>
	);
}

export default Type;
