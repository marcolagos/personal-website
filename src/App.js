import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import References from "./Pages/References/References";
import { AnimatePresence } from "framer-motion";
import Particle from "./Components/Home/Particle/Particle";

// Components
import ReferencesPost from "./Components/References/ReferencesPost/ReferencesPost";

// Firestore
import { db } from "./Firebase";

import AOS from "aos";
import "aos/dist/aos.css";

// Utils
import { REFERENCES_LINK } from "./Utils/Constants.Utils";

function App() {
	const location = useLocation();

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div style={{ backgroundColor: "#171E30" }}>
			<Particle />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.key}>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/projects" element={<Projects />} />
					<Route exact path={REFERENCES_LINK} element={<References />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</AnimatePresence>
			<Routes location={location} key={location.key}>
				<Route exact path={`${REFERENCES_LINK}:fileName`} element={<ReferencesPost />} />
			</Routes>
		</div>
	);
}

export default App;
