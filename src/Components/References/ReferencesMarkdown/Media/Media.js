import React from "react";

function Media({ folder, image }) {
	const imagePath = require(`../../../../Assets/References/${folder}/${image}`);
	return (
		<span className="image-container" align="center">
			<img src={imagePath} className="image" alt="image"/>
		</span>
	);
}

export default Media;
