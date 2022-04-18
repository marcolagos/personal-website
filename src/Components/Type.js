import React from "react";
import Typewriter from "typewriter-effect";

function Type({ words }) {
	return (
		<div>
			<Typewriter
				options={{
					strings: [...words],
					autoStart: true,
					loop: true,
					deleteSpeed: 40,
				}}
			/>
		</div>
	);
}

export default Type;
