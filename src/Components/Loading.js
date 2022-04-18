import React from "react";
import { motion } from "framer-motion";
import ThreeDotsWave from "./ThreeDotsWave";

function Loading() {
	return (
		<div className="loading">
			<span><ThreeDotsWave/></span>
		</div>
	);
}
export default Loading;
