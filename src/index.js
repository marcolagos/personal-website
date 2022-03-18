import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
import ReferencesPost from "./Components/References/ReferencesPost/ReferencesPost";

// Simple Animations
import AOS from "aos";
import "aos/dist/aos.css";

// Firebase or Firestore database
import { db } from "./Firebase";

// Utils
import { REFERENCES_LINK } from "./Utils/Constants.Utils";


function App() {

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path={REFERENCES_LINK} element={<References />} />
				<Route exact path={`${REFERENCES_LINK}:fileName`} element={<ReferencesPost />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
