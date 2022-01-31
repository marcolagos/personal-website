import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import References from "./Pages/References";
import Resume from "./Pages/Resume";

// Components
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";


function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" exact component={Home} />
					<Route path="/projects" component={Projects} />
                    <Route path="/references" component={References} />
					<Route path="/resume" component={Resume} />
					<Route path="/about" component={About} />
				</Routes>
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
