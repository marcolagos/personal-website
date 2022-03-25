import { motion } from "framer-motion";

const animations = {
	initial: { opacity: 0, y: 100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -100 },
};

const homeAnimations = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

function AnimatedPage({ children, home }) {
	return (
		<motion.div
			variants={home ? homeAnimations : animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.85 }}
		>
			{children}
		</motion.div>
	);
}

export default AnimatedPage;
