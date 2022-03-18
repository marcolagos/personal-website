import React from "react";

function Media({ folder, image }) {
	const imagePath = require(`../../../../Assets/References/${folder}/${image}`);
	return (
		<div className="image-container" style={{height: 200, width: 500, display: "block"}}>
			<img src={imagePath} className="image" alt="image"/>
		</div>
	);
}

export default Media;
