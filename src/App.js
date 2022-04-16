import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import About from "./Pages/About/About";
// import Home from "./Pages/Home/Home";
// import Projects from "./Pages/Projects/Projects";
// import Contact from "./Pages/Contact/Contact";
// import References from "./Pages/References/References";
// import ReferencesPost from "./Components/References/ReferencesPost/ReferencesPost";
import Loading from "./Components/Other/Loading/Loading";


import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import { REFERENCES_LINK } from "./Utils/Constants.Utils";

const LazyAbout = React.lazy(() => import("./Pages/About/About"));
const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
const LazyProjects = React.lazy(() => import("./Pages/Projects/Projects"));
const LazyContact = React.lazy(() => import("./Pages/Contact/Contact"));
const LazyReferences = React.lazy(() => import("./Pages/References/References"));
const LazyReferencesPost = React.lazy(() => import("./Components/References/ReferencesPost/ReferencesPost"));

function App() {
	const location = useLocation();

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div style={{ backgroundColor: "#171E30" }}>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.key}>
					<Route
						exact
						path="/"
						element={
							<React.Suspense fallback={<Loading />}>
								<LazyHome />
							</React.Suspense>
						}
					/>
					<Route
						exact
						path="/projects"
						element={
							<React.Suspense fallback={<Loading />}>
								<LazyProjects />
							</React.Suspense>
						}
					/>
					<Route
						exact
						path={REFERENCES_LINK}
						element={
							<React.Suspense fallback={<Loading />}>
								<LazyReferences />
							</React.Suspense>
						}
					/>
					<Route
						exact
						path="/contact"
						element={
							<React.Suspense fallback={<Loading />}>
								<LazyContact />
							</React.Suspense>
						}
					/>
					<Route
						exact
						path="/about"
						element={
							<React.Suspense fallback={<Loading />}>
								<LazyAbout />
							</React.Suspense>
						}
					/>
				</Routes>
			</AnimatePresence>
			<Routes>
				<Route
					exact
					path={`${REFERENCES_LINK}:fileName`}
					element={
						<React.Suspense fallback={<Loading />}>
							<LazyReferencesPost />
						</React.Suspense>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
