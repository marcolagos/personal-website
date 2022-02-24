import React from "react";
import Particles from "react-tsparticles";

function ParticleBackground() {
	const particlesInit = (main) => {
		console.log(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<div>
			<Particles
				className="particles"
				params={{
					particles: {
						number: {
							value: 400,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: "#FFFFFF",
						},
						shape: {
							type: "circle",
							stroke: {
								width: 0,
								color: "#B3B3B3",
							},
							polygon: {
								nb_sides: 5,
							},
						},
						opacity: {
							value: 0.5,
							random: false,
							anim: {
								enable: false,
								speed: 0.5,
								opacity_min: 0,
								sync: false,
							},
						},
						size: {
							value: 1.5,
							random: true,
							anim: {
								enable: true,
								speed: 2,
								size_min: 0,
								sync: false,
							},
						},
						line_linked: {
							enable: false,
							distance: 150,
							color: "#ffffff",
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 0.5,
							direction: "none",
							random: true,
							out_mode: "out",
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200,
							},
						},
					},
					interactivity: {
						detect_on: "canvas",
						events: {
							onhover: {
								enable: true,
								mode: "bubble",
							},
							onclick: {
								enable: true,
								mode: "push",
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 84,
								size: 1,
								duration: 3,
								opacity: 1,
								speed: 3,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
				}}
			/>
		</div>
	);
}

export default ParticleBackground;
