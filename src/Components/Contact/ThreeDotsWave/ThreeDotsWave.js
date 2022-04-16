import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const loadingCircleVariants = {
	start: {
		y: "0%",
	},
	end: {
		y: "100%",
	},
};

const loadingCircleTransition = {
  duration: 0.3,
  reverse: Infinity,
  ease: "easeInOut",
};

const ThreeDotsWave = () => {
	return (
		<motion.div className="loading-container" variants={loadingContainerVariants} initial="start" animate="end">
			<motion.span
				className="loading-circle span-1"
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			></motion.span>
			<motion.span
				className="loading-circle span-2"
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			></motion.span>
			<motion.span
				className="loading-circle span-3"
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			></motion.span>
		</motion.div>
	);
};

export default ThreeDotsWave;
