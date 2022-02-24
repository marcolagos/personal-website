import React from "react";

import img6 from "../Assets/crescent-moon.jpeg";
import img5 from "../Assets/foggy-forest.jpeg";
import img4 from "../Assets/foggy-hills.jpeg";
import img3 from "../Assets/mountain-night.jpeg";
import img2 from "../Assets/underwater-jellyfish.jpeg";
import img1 from "../Assets/underwater-medium.jpeg";

function HomeImages() {
	return (
		<div className="background">
			<img className="background-image img1" src={img1}></img>
			{/* <img className="background-image img2" src={img2}></img>
			<img className="background-image img3" src={img3}></img>
			<img className="background-image img4" src={img4}></img>
			<img className="background-image img5" src={img5}></img>
			<img className="background-image img6" src={img6}></img> */}
		</div>
	);
}

export default HomeImages;
