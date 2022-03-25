import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Navigation from "./Components/Other/Navigation/Navigation";
import Footer from "./Components/Other/Footer/Footer";

ReactDOM.render(
	<BrowserRouter>
		<Navigation />
		<App />
		<Footer />
	</BrowserRouter>,
	document.getElementById("root"),
);
