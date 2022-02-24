import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import References from "./Pages/References";
import Resume from "./Pages/Resume";

// Components
import Navigation from "./Sections/Navigation";
import Footer from "./Sections/Footer";
import Loading from "./Components/Loading";

// CSS
import "./App.css";

function App() {
	// const [loader, setLoader] = useState(true);

	// useEffect(() => {
	// 	const timer = setTimeout(() => setLoader(false), 2000);
	// }, []);

	return (
		<Router>
			<div className="App">
				{/* {loader ? <Loading /> : null} */}
				<Navigation />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/references" element={<References />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
