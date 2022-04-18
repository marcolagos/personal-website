import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Particle from "./Components/Particle";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

ReactDOM.render(
	<BrowserRouter>
		<Navigation />
		<Particle />
		<App />
		<Footer />
	</BrowserRouter>,
	document.getElementById("root"),
);
