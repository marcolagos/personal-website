import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import References from "./Pages/References/References";

// Components
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Particle from "./Components/Particle/Particle";

import AOS from "aos";
import "aos/dist/aos.css";

// CSS
import "./App.css";

// Firebase/Firestore
import { db } from './Firebase';

function App() {

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<Router>
			<div className="App">
				<Navigation />
				{/* <Particle /> */}
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/references" element={<References />} />
					<Route path="/contact" element={<Contact />}/>
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
