import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
	return (
		<div>
			<Typewriter
				options={{
					strings: [
						"Low-level languages",
						"MERN Stack Developer",
						"Open Source Contributor",
						"Philosopher"
					],
					autoStart: true,
					loop: true,
					deleteSpeed: 50,
				}}
			/>
		</div>
	);
}

export default Type;
